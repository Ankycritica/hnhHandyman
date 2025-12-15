import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const {
      serviceType,
      firstName,
      lastName,
      email,
      phone,
      zip,
      smsOptIn,
    } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !zip) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Log the contact form submission
    console.log("Contact form submission:", {
      serviceType,
      firstName,
      lastName,
      email,
      phone,
      zip,
      smsOptIn: smsOptIn || false,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service (Resend) and SMS service (Twilio)
    // Similar to the chat/notify route implementation
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "HnHHandyman <onboarding@resend.dev>",
      to: process.env.CLIENT_EMAIL || "your-email@example.com",
      subject: `New Contact Form Submission - ${serviceType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>ZIP Code:</strong> ${zip}</p>
        <p><strong>SMS Opt-in:</strong> ${smsOptIn ? "Yes" : "No"}</p>
      `,
      replyTo: email,
    })
    */

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, error: "Failed to submit contact form" },
      { status: 500 }
    )
  }
}

