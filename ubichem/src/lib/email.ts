import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailOptions {
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP not configured. Skipping email send.");
    return false;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ENQUIRY_TO_EMAIL || process.env.SMTP_USER,
      ...options,
    });
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}

export function formatEnquiryEmail(data: {
  name: string;
  phone: string;
  email: string;
  city: string;
  productInterest: string;
  message: string;
}): EmailOptions {
  return {
    subject: `New Enquiry from ${data.name} - ${data.productInterest}`,
    html: `
      <h2>New Product Enquiry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Village/City</td><td style="padding: 8px; border: 1px solid #ddd;">${data.city}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Product Interest</td><td style="padding: 8px; border: 1px solid #ddd;">${data.productInterest}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td></tr>
      </table>
      <p style="color: #666; margin-top: 16px;">Sent from Ubichem Website Enquiry Form</p>
    `,
  };
}

export function formatContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): EmailOptions {
  return {
    subject: `Contact Form Message from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td></tr>
      </table>
      <p style="color: #666; margin-top: 16px;">Sent from Ubichem Website Contact Form</p>
    `,
  };
}

