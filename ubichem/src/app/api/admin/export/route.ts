import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthenticated(request: NextRequest): boolean {
  const token = request.cookies.get("admin_token")?.value;
  return !!token;
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "enquiry";

    let csvContent = "";

    if (type === "contact") {
      const contacts = await prisma.contact.findMany({
        orderBy: { createdAt: "desc" },
      });

      csvContent = "ID,Name,Email,Phone,Message,Date\n";
      csvContent += contacts
        .map(
          (c) =>
            `"${c.id}","${c.name}","${c.email}","${c.phone}","${c.message.replace(/"/g, '""')}","${c.createdAt.toISOString()}"`
        )
        .join("\n");
    } else {
      const enquiries = await prisma.enquiry.findMany({
        orderBy: { createdAt: "desc" },
      });

      csvContent = "ID,Name,Phone,Email,City,Product Interest,Message,Date\n";
      csvContent += enquiries
        .map(
          (e) =>
            `"${e.id}","${e.name}","${e.phone}","${e.email}","${e.city}","${e.productInterest}","${e.message.replace(/"/g, '""')}","${e.createdAt.toISOString()}"`
        )
        .join("\n");
    }

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="${type}s_${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error("CSV export error:", error);
    return NextResponse.json(
      { error: "Failed to export data" },
      { status: 500 }
    );
  }
}

