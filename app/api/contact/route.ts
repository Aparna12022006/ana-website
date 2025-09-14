
import { NextRequest, NextResponse } from "next/server";
import sendContactEmail from "@/lib/sendContactEmail";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const result = await sendContactEmail(formData);

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
