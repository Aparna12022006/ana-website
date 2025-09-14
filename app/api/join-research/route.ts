import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export const runtime = "nodejs"; // needed for nodemailer in Next.js

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      rollnumber,
      year,
      branch,
      reason,
      skills,
      email,
      phone,
      other,
    } = body;

    if (!name || !email || !rollnumber) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, rollnumber" },
        { status: 400 }
      );
    }

    // ✅ Club Gmail credentials (use App Password here)
    const EMAIL_USER = "anaclubgcet@gmail.com"; 
    const EMAIL_PASS = "alwlkyabttggudhf"; // 16-digit Gmail App Password

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const subject = `New Research Form Submission from ${name}`;
    const textBody = `
Name: ${name}
Roll Number: ${rollnumber}
Year: ${year || "N/A"}
Branch: ${branch || "N/A"}
Reason: ${reason || "N/A"}
Skills: ${skills || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Other: ${other || "N/A"}
    `;

    const mailOptions = {
      from: EMAIL_USER,     // must be club Gmail
      to: EMAIL_USER,       // club receives
      replyTo: email,       // reply goes to student
      subject,
      text: textBody,
      html: `<pre style="font-family: monospace">${textBody}</pre>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);

    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (err: any) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
