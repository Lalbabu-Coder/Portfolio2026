import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 1️⃣ DB connect
    await connectDB();

    // 2️⃣ Save to MongoDB
    await Contact.create({ name, email, subject, message });

    // 3️⃣ Send Email
    await sendMail({ name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
