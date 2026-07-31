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

    let dbSaved = false;
    let emailSent = false;
    const errors: string[] = [];

    // 1️⃣ Save to MongoDB (if URI configured)
    if (process.env.MONGODB_URI) {
      try {
        await connectDB();
        await Contact.create({ name, email, subject, message });
        dbSaved = true;
      } catch (dbError: any) {
        console.error("MongoDB Contact Save Error:", dbError?.message || dbError);
        errors.push("Database error: " + (dbError?.message || "Could not save message"));
      }
    } else {
      console.warn("MONGODB_URI not provided; skipping DB save.");
    }

    // 2️⃣ Send Email via Nodemailer
    try {
      await sendMail({ name, email, subject, message });
      emailSent = true;
    } catch (mailError: any) {
      console.error("Nodemailer Send Error:", mailError?.message || mailError);
      errors.push("Email dispatch error: " + (mailError?.message || "Could not send email"));
    }

    if (dbSaved || emailSent) {
      return NextResponse.json({ 
        success: true, 
        message: "Message received successfully!",
        dbSaved,
        emailSent 
      });
    }

    return NextResponse.json(
      { error: "Could not process contact message. " + errors.join(" | ") },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
