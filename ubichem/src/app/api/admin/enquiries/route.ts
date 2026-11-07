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
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;

    if (type === "contact") {
      const [contacts, total] = await Promise.all([
        prisma.contact.findMany({
          orderBy: { createdAt: "desc" },
          skip,
          take: limit,
        }),
        prisma.contact.count(),
      ]);
      return NextResponse.json({ data: contacts, total, page, limit });
    }

    const [enquiries, total] = await Promise.all([
      prisma.enquiry.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.enquiry.count(),
    ]);

    return NextResponse.json({ data: enquiries, total, page, limit });
  } catch (error) {
    console.error("Failed to fetch enquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

