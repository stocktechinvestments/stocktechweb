import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { name, email, contactNo, message } = body;

    name = sanitizeInput(name);
    email = sanitizeInput(email);
    contactNo = parseInt(contactNo)
    message = sanitizeInput(message);

    if (!name || !email || !contactNo || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }

    if (typeof contactNo !== "number" || contactNo.toString().length < 7) {
      return NextResponse.json({ message: "Invalid contact number." }, { status: 400 });
    }
    if (message.length > 1000) {
      return NextResponse.json({ message: "Message too long. Max 1000 characters." }, { status: 400 });
    }
    const {error } = await resend.emails.send({
      from: "Stocktech Investments <onboarding@resend.dev>",
      to: ["priyeshrai.dev@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact No:</strong> ${contactNo}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ message: "Failed to send email. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ message: "Thank you for contacting us! We'll get back to you soon." }, { status: 200 });

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ message: "Internal server error. Please try again later." }, { status: 500 });
  }
}
