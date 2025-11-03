import { NextRequest, NextResponse } from "next/server"

// This endpoint handles follow-up messages from customer
export async function POST(request: NextRequest) {
  try {
    const { customerInfo, message } = await request.json()

    const CLIENT_EMAIL = process.env.CLIENT_EMAIL || "your-email@example.com"
    const CLIENT_PHONE = process.env.CLIENT_PHONE || "+1234567890"

    // Send follow-up notification
    console.log("Follow-up message from customer:", {
      customerInfo,
      message,
      timestamp: new Date().toISOString(),
    })

    // Same email/SMS logic as notify route
    // (Use Resend and Twilio as shown in notify/route.ts)

    return NextResponse.json({
      success: true,
      message: "Follow-up message sent",
    })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    )
  }
}

