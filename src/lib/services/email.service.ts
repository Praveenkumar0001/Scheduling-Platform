import nodemailer from "nodemailer";

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Cal Clone" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}

export function generateBookingConfirmationEmail(booking: {
  attendeeName: string;
  eventType: { title: string; duration: number };
  startTime: Date;
  endTime: Date;
}) {
  const formattedDate = new Date(booking.startTime).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = new Date(booking.startTime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
        .label { font-weight: bold; color: #6b7280; }
        .value { color: #111827; }
        .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmed! ✓</h1>
        </div>
        <div class="content">
          <p>Hi ${booking.attendeeName},</p>
          <p>Your booking has been confirmed. Here are the details:</p>
          
          <div class="details">
            <div class="detail-row">
              <span class="label">Event Type:</span>
              <span class="value">${booking.eventType.title}</span>
            </div>
            <div class="detail-row">
              <span class="label">Duration:</span>
              <span class="value">${booking.eventType.duration} minutes</span>
            </div>
            <div class="detail-row">
              <span class="label">Date:</span>
              <span class="value">${formattedDate}</span>
            </div>
            <div class="detail-row">
              <span class="label">Time:</span>
              <span class="value">${formattedTime}</span>
            </div>
          </div>

          <p>If you need to reschedule or cancel, please contact us as soon as possible.</p>
          
          <div class="footer">
            <p>This is an automated email from Cal Clone Scheduling Platform.</p>
            <p>© 2026 Cal Clone. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateBookingCancellationEmail(booking: {
  attendeeName: string;
  eventType: { title: string };
  startTime: Date;
}) {
  const formattedDate = new Date(booking.startTime).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = new Date(booking.startTime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #ef4444; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Cancelled</h1>
        </div>
        <div class="content">
          <p>Hi ${booking.attendeeName},</p>
          <p>Your booking has been cancelled:</p>
          
          <div class="details">
            <p><strong>Event:</strong> ${booking.eventType.title}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${formattedTime}</p>
          </div>

          <p>If you'd like to reschedule, please visit our booking page to select a new time.</p>
          
          <div class="footer">
            <p>This is an automated email from Cal Clone Scheduling Platform.</p>
            <p>© 2026 Cal Clone. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
