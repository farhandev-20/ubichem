import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD;

    if (!adminPass) {
      return NextResponse.json(
        { error: "Admin not configured" },
        { status: 500 }
      );
    }

    if (username === adminUser && password === adminPass) {
      // Simple token-based auth (in production, use proper session management)
      const token = Buffer.from(`${adminUser}:${Date.now()}`).toString("base64");
      
      const response = NextResponse.json({ success: true });
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 8, // 8 hours
        path: "/",
      });
      
      return response;
    }

    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}

