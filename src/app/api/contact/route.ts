import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Contact } from "@/lib/models/Contact";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
	try {
		await connectDB();

		const body = await request.json();
		const { name, email, company, service, budget, message } = body;

		// Validation
		if (!name || !email || !service || !budget || !message) {
			return NextResponse.json(
				{
					success: false,
					error: "Missing required fields",
				},
				{ status: 400 },
			);
		}

		// Validate email format
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{
					success: false,
					error: "Invalid email format",
				},
				{ status: 400 },
			);
		}

		// Create contact document in database
		const contact = await Contact.create({
			name: name.trim(),
			email: email.trim(),
			company: company?.trim() || "",
			service,
			budget,
			message: message.trim(),
			source: 'Website'
		});

		// Send emails
		const emailResult = await sendContactEmail({
			name,
			email,
			company,
			service,
			budget,
			message,
		});

		return NextResponse.json(
			{
				success: true,
				message: "Form submitted successfully",
				contactId: contact._id,
				emailIds: {
					admin: emailResult.success,
					user: emailResult.success,
				},
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error("Contact form error:", error);

		const errorMessage = error instanceof Error ? error.message : "Internal server error";

		return NextResponse.json(
			{
				success: false,
				error: errorMessage,
			},
			{ status: 500 },
		);
	}
}

export async function GET() {
	return NextResponse.json({ message: "This endpoint only accepts POST requests" }, { status: 405 });
}
