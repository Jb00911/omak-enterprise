import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message } = body;

    // Basic validation
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Email to YOU — notification of new inquiry
    await resend.emails.send({
      from: "Omak Enterprise Contact Form <onboarding@resend.dev>", // change after domain verified
      to: process.env.CONTACT_EMAIL!,
      subject: `New Inquiry: ${service} — from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#050F1F;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#050F1F;padding:40px 20px;">
              <tr>
                <td>
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#071526;border:1px solid rgba(201,168,76,0.2);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="padding:32px 40px;border-bottom:1px solid rgba(201,168,76,0.15);">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td>
                              <div style="display:inline-block;width:32px;height:32px;border:1px solid #C9A84C;text-align:center;line-height:32px;transform:rotate(45deg);margin-right:12px;vertical-align:middle;">
                                <span style="display:inline-block;transform:rotate(-45deg);color:#C9A84C;font-weight:700;font-size:12px;font-family:monospace;">OE</span>
                              </div>
                              <span style="color:#ffffff;font-size:16px;font-weight:600;vertical-align:middle;">Omak Enterprise Inc.</span>
                            </td>
                            <td style="text-align:right;">
                              <span style="background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);color:#C9A84C;font-size:10px;font-family:monospace;letter-spacing:0.2em;text-transform:uppercase;padding:4px 10px;">New Inquiry</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Title -->
                    <tr>
                      <td style="padding:32px 40px 8px;">
                        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;line-height:1.3;">
                          New Contact Form Submission
                        </h1>
                        <p style="margin:8px 0 0;color:#8A95A3;font-size:13px;">
                          Received via omakenterprise.com
                        </p>
                      </td>
                    </tr>

                    <!-- Details -->
                    <tr>
                      <td style="padding:24px 40px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          
                          ${[
                            { label: "Full Name", value: name },
                            { label: "Email Address", value: email },
                            { label: "Company / Website", value: company || "Not provided" },
                            { label: "Service Interested In", value: service },
                            { label: "Budget Range", value: budget || "Not specified" },
                          ].map(({ label, value }) => `
                            <tr>
                              <td style="padding:10px 0;border-bottom:1px solid rgba(201,168,76,0.08);">
                                <p style="margin:0 0 3px;color:#C9A84C;font-size:10px;font-family:monospace;letter-spacing:0.2em;text-transform:uppercase;">${label}</p>
                                <p style="margin:0;color:#D4D9E1;font-size:14px;">${value}</p>
                              </td>
                            </tr>
                          `).join("")}

                          <!-- Message -->
                          <tr>
                            <td style="padding:16px 0 0;">
                              <p style="margin:0 0 8px;color:#C9A84C;font-size:10px;font-family:monospace;letter-spacing:0.2em;text-transform:uppercase;">Message</p>
                              <div style="background:#050F1F;border:1px solid rgba(201,168,76,0.12);padding:16px;color:#C8CDD5;font-size:14px;line-height:1.7;">
                                ${message.replace(/\n/g, "<br/>")}
                              </div>
                            </td>
                          </tr>

                        </table>
                      </td>
                    </tr>

                    <!-- CTA -->
                    <tr>
                      <td style="padding:8px 40px 40px;">
                        <a href="mailto:${email}?subject=Re: Your inquiry about ${service} — Omak Enterprise"
                          style="display:inline-block;background:#C9A84C;color:#050F1F;font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;padding:14px 28px;">
                          Reply to ${name} →
                        </a>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:20px 40px;border-top:1px solid rgba(201,168,76,0.1);background:#050F1F;">
                        <p style="margin:0;color:#6B7685;font-size:11px;font-family:monospace;">
                          Omak Enterprise Inc. · New York, USA · omakenterprise.com
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    // Auto-reply to the person who submitted
    await resend.emails.send({
      from: "Omak Enterprise Inc. <onboarding@resend.dev>", // change after domain verified
      to: email,
      subject: "We received your message — Omak Enterprise Inc.",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#050F1F;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#050F1F;padding:40px 20px;">
              <tr>
                <td>
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#071526;border:1px solid rgba(201,168,76,0.2);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="padding:32px 40px;border-bottom:1px solid rgba(201,168,76,0.15);text-align:center;">
                        <p style="margin:0 0 4px;color:#C9A84C;font-size:10px;font-family:monospace;letter-spacing:0.3em;text-transform:uppercase;">Omak Enterprise Inc.</p>
                        <p style="margin:0;color:#6B7685;font-size:10px;font-family:monospace;letter-spacing:0.2em;">New York, USA</p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:40px 40px 32px;text-align:center;">
                        <div style="width:48px;height:1px;background:#C9A84C;margin:0 auto 24px;"></div>
                        <h1 style="margin:0 0 16px;color:#ffffff;font-size:24px;font-weight:300;line-height:1.3;">
                          Thank You, ${name}.
                        </h1>
                        <p style="margin:0 0 16px;color:#8A95A3;font-size:15px;line-height:1.7;">
                          We have received your inquiry about <strong style="color:#D4D9E1;">${service}</strong> and will review it within one business day.
                        </p>
                        <p style="margin:0 0 32px;color:#8A95A3;font-size:15px;line-height:1.7;">
                          A member of our team will be in touch shortly to discuss your project and schedule a free consultation.
                        </p>
                        <div style="width:48px;height:1px;background:#C9A84C;margin:0 auto 32px;"></div>
                        <a href="https://omakenterprise.com/services"
                          style="display:inline-block;border:1px solid rgba(201,168,76,0.4);color:#C9A84C;font-size:11px;font-family:monospace;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;padding:12px 24px;">
                          Explore Our Services
                        </a>
                      </td>
                    </tr>

                    <!-- What happens next -->
                    <tr>
                      <td style="padding:0 40px 40px;">
                        <div style="background:#050F1F;border:1px solid rgba(201,168,76,0.12);padding:24px;">
                          <p style="margin:0 0 16px;color:#C9A84C;font-size:10px;font-family:monospace;letter-spacing:0.25em;text-transform:uppercase;">What Happens Next</p>
                          ${[
                            "We review your submission within 24 hours",
                            "We schedule a free 30-minute discovery call",
                            "We send a tailored proposal with clear pricing",
                            "We kick off your project and start delivering results",
                          ].map((step, i) => `
                            <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
                              <div style="min-width:20px;height:20px;border:1px solid rgba(201,168,76,0.4);display:flex;align-items:center;justify-content:center;margin-top:1px;">
                                <span style="color:#C9A84C;font-size:10px;font-family:monospace;">${i + 1}</span>
                              </div>
                              <p style="margin:0;color:#8A95A3;font-size:13px;line-height:1.6;">${step}</p>
                            </div>
                          `).join("")}
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:20px 40px;border-top:1px solid rgba(201,168,76,0.1);background:#050F1F;text-align:center;">
                        <p style="margin:0 0 4px;color:#6B7685;font-size:11px;font-family:monospace;">
                          Omak Enterprise Inc. · New York, USA
                        </p>
                        <p style="margin:0;color:#6B7685;font-size:11px;font-family:monospace;">
                          <a href="https://omakenterprise.com" style="color:#C9A84C;text-decoration:none;">omakenterprise.com</a>
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
