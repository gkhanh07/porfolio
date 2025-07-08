import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAI

export async function POST(req) {
    try {
        const { email, subject, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: ['gkhanh0706@gmail.com'],
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #8B5CF6;">New Contact Form Submission</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>From:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #666; font-size: 14px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ message: 'Email sent successfully', data }, { status: 200 });
    } catch (error) {
        console.error('API error:', error);
        return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }
}