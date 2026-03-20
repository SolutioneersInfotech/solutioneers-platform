import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name"],
			trim: true,
			maxlength: [100, "Name cannot be more than 100 characters"],
		},
		email: {
			type: String,
			required: [true, "Please provide an email"],
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
		},
		company: {
			type: String,
			trim: true,
			default: "",
		},
		service: {
			type: String,
			required: [true, "Please select a service"],
			enum: ["web-development", "mobile-app-development", "ui-ux-design", "digital-marketing", "seo-services", "other"],
		},
		budget: {
			type: String,
			required: [true, "Please select a budget range"],
			enum: ["under-25k", "25k-50k", "50k-100k", "100k-300k", "over-300k", "not-sure"],
		},
		message: {
			type: String,
			required: [true, "Please provide a message"],
			trim: true,
			maxlength: [5000, "Message cannot be more than 5000 characters"],
		},
		status: {
			type: String,
			enum: ["new", "responded", "archived"],
			default: "new",
		},
		source: {
			type: String,
			enum: ["website", "email", "phone", "other"],
			default: "website",
			trim: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	},
);

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
