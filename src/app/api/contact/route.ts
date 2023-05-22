import { transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (request.method == "POST") {
    // const { name, email, message } = request.body;
    const data = await request.json();
    if (!data.name || !data.email || !data.message || !data.message) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    try {
      await transporter.sendMail({
        from: `${data.name} <${data.email}>`,
        sender: "noreply@thetolulopeaina.com",
        to: process.env.EMAIL_RECIPIENT,
        subject: "New Contact message from website",
        text: data.message,
        html: `<p>${data.message}</p>`,
      });

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error(error);

      // send error response
      return NextResponse.json({ success: false }, { status: 500 });
    }
  }
  return NextResponse.json({ error: "" }, { status: 400 });
}
