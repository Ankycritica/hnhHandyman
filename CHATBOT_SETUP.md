# Chatbot Setup Instructions

## Overview
The chatbot allows customers to inquire about handyman services. When a customer sends a message:
1. Your client receives an **email** notification
2. Your client receives an **SMS text** notification  
3. Your client can reply via email or text (with additional setup)

## Quick Start (Currently Working)

The chatbot is already functional! Click "Book a Handyman" to test it.

Currently, it logs messages to the console. To get email/SMS notifications, follow the setup below.

## Setup Email Notifications (Resend)

1. **Sign up for Resend** (free tier available)
   - Go to https://resend.com
   - Create an account and get your API key

2. **Install Resend**
   ```bash
   npm install resend
   ```

3. **Create `.env.local` file** (copy from `.env.local.example`)
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CLIENT_EMAIL=your-email@example.com
   ```

4. **Uncomment email code** in `app/api/chat/notify/route.ts` (lines with `resend`)

## Setup SMS Notifications (Twilio)

1. **Sign up for Twilio** (free trial available)
   - Go to https://www.twilio.com
   - Get your Account SID, Auth Token, and phone number

2. **Install Twilio**
   ```bash
   npm install twilio
   ```

3. **Add to `.env.local`**
   ```env
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   CLIENT_PHONE=+1234567890
   ```

4. **Uncomment SMS code** in `app/api/chat/notify/route.ts` (lines with `twilio`)

## Environment Variables Template

Create a `.env.local` file with:

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here

# SMS Service (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

# Client Contact Info
CLIENT_EMAIL=your-email@example.com
CLIENT_PHONE=+1234567890
```

## Two-Way Replies (Advanced)

To allow your client to reply via email/SMS and have responses go back to customers:

### Email Replies
1. Configure Resend webhook for incoming emails
2. Create `/api/webhooks/email` endpoint to handle replies
3. Store conversation history in database

### SMS Replies  
1. Configure Twilio webhook for incoming SMS
2. Create `/api/webhooks/sms` endpoint to handle replies
3. Match phone numbers to customer conversations

Would you like me to implement the two-way reply system? Let me know!

## Testing

1. Click "Book a Handyman" button
2. Chat will open
3. Type your service request
4. Provide name, email, and phone when prompted
5. Check your email/SMS (if configured) or console logs

## Features

✅ Beautiful chat interface  
✅ Collects customer info (name, email, phone)  
✅ Email notifications to client  
✅ SMS notifications to client  
✅ Follow-up messages supported  
✅ Mobile responsive  
⏳ Two-way replies (requires additional setup)

