import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitizeInput(input: string) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        let { name, contactNo, occupation, services } = body;

        name = sanitizeInput(name);
        occupation = sanitizeInput(occupation);
        services = Array.isArray(services)
            ? services.map((s: string) => sanitizeInput(s)).join(", ")
            : "";

        contactNo = parseInt(contactNo);

        if (!name || !occupation || !contactNo || !services) {
            return NextResponse.json(
                { message: "All fields are required." },
                { status: 400 }
            );
        }

        if (isNaN(contactNo) || contactNo.toString().length < 7) {
            return NextResponse.json(
                { message: "Invalid contact number." },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: "Stocktech Investments <admin@stocktechinvestments.com>",
            to: ["stocktechinvestments@gmail.com",'agrawalsales2811@gmail.com'],
            subject: "New Inquiry on Stocktech Website",
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Enquiry Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact No:</strong> ${contactNo}</p>
          <p><strong>Occupation:</strong> ${occupation}</p>
          <p><strong>Interested Services:</strong> ${services}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return NextResponse.json(
                { message: "Failed to send email. Please try again later." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Thank you for contacting us! We'll get back to you soon." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json(
            { message: "Internal server error. Please try again later." },
            { status: 500 }
        );
    }
}
