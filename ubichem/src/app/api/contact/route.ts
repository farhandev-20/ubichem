import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { prisma } from "@/lib/db";
import { sendEmail, formatContactEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const { success } = rateLimit(ip, 5, 60000);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const data = result.data;

    // Save to database
    await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
    });

    // Send email notification
    await sendEmail(formatContactEmail(data));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit message. Please try again." },
      { status: 500 }
    );
  }
}

