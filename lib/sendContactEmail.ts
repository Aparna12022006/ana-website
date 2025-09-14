import nodemailer from "nodemailer";

export default async function sendContactEmail(formData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // must be the club Gmail
    to: process.env.EMAIL_USER,   // club receives the mail
    replyTo: formData.email,      // reply goes to student's email
    subject: `New Contact Form Message from ${formData.name}`,
    text: `${formData.subject}\n\n${formData.message}`,
    html: `<h3>${formData.subject}</h3><p>${formData.message}</p><p>From: ${formData.name} (${formData.email})</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Nodemailer error:", error);
    return { success: false, error };
  }
}
