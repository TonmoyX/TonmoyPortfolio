import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_TO_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword || !toEmail) {
    console.error(
      "Contact form is misconfigured: missing GMAIL_USER, GMAIL_APP_PASSWORD, or CONTACT_TO_EMAIL."
    );
    return Response.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio Contact Form <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name} (Portfolio Contact Form)`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
