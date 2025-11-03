import { NextRequest, NextResponse } from "next/server"

// This endpoint handles initial customer inquiry
// It will send email and SMS to your client
export async function POST(request: NextRequest) {
  try {
    const { customerInfo, initialMessage } = await request.json()

    // TODO: Replace with your client's actual email and phone
    const CLIENT_EMAIL = process.env.CLIENT_EMAIL || "your-email@example.com"
    const CLIENT_PHONE = process.env.CLIENT_PHONE || "+1234567890"

    // Email notification (we'll use Resend)
    // First, install: npm install resend
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "Mr. Handyman <onboarding@resend.dev>",
      to: CLIENT_EMAIL,
      subject: `New Customer Inquiry from ${customerInfo.name}`,
      html: `
        <h2>New Customer Inquiry</h2>
        <p><strong>Name:</strong> ${customerInfo.name}</p>
        <p><strong>Email:</strong> ${customerInfo.email}</p>
        <p><strong>Phone:</strong> ${customerInfo.phone}</p>
        <p><strong>Message:</strong> ${initialMessage}</p>
        <hr>
        <p><em>Reply to this email to respond directly to the customer</em></p>
      `,
      replyTo: customerInfo.email,
    })
    */

    // SMS notification (we'll use Twilio)
    // First, install: npm install twilio
    /*
    const twilio = require("twilio")
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    )
    
    await client.messages.create({
      body: `New inquiry from ${customerInfo.name} (${customerInfo.phone}): ${initialMessage}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: CLIENT_PHONE,
    })
    */

    // For now, just log it (you'll need to set up the services above)
    console.log("New customer inquiry:", {
      customerInfo,
      initialMessage,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Notification sent to client",
    })
  } catch (error) {
    console.error("Error sending notification:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send notification" },
      { status: 500 }
    )
  }
}

