import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { prisma } from "@/lib/db";
import { sendEmail, formatEnquiryEmail } from "@/lib/email";
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
    const result = enquirySchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body.website) {
      // Silently accept but don't process (bot detected)
      return NextResponse.json({ success: true });
    }

    const data = result.data;

    // Save to database
    await prisma.enquiry.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city,
        productInterest: data.productInterest,
        message: data.message,
      },
    });

    // Send email notification
    await sendEmail(formatEnquiryEmail(data));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}

