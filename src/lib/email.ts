import { Resend } from "resend";
import ContactEmail from "@/../emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendContactEmailProps {
	name: string;
	email: string;
	company?: string;
	service: string;
	budget: string;
	message: string;
}

export async function sendContactEmail({ name, email, company, service, budget, message }: SendContactEmailProps) {
	try {
		// Send email to admin
		const adminResponse = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: process.env.ADMIN_EMAIL || "info@solutioneers.in",
			subject: `New Contact Form Submission from ${name}`,
			react: ContactEmail({
				name,
				email,
				company,
				service,
				budget,
				message,
			}),
		});
		if (adminResponse.error) {
			console.error("Error sending email to admin:", adminResponse.error);
		}
		// Send confirmation email to user
		const userResponse = await resend.emails.send({
			from: "Solutioneers <onboarding@resend.dev>",
			to: email,
			subject: "We received your message - Solutioneers",
			html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your enquiry and will get back to you shortly.</p>
        <p>Our team will review your requirements and contact you within 24-48 hours.</p>
        <hr />
        <p><strong>Your submission details:</strong></p>
        <ul>
          <li><strong>Service:</strong> ${service.replace("-", " ").toUpperCase()}</li>
          <li><strong>Budget Range:</strong> ${budget}</li>
        </ul>
        <p>Best regards,<br />The Solutioneers Team</p>
      `,
		});
		if (userResponse.error) {
			console.error("Error sending confirmation email to user:", userResponse.error);
		}
		return {
			success: true,
		};
	} catch (error) {
		console.error("Error sending email:", error);
		throw new Error("Failed to send email");
	}
}
