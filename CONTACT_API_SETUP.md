# Contact Form API Setup Guide

## Overview

This guide explains how to set up and configure the contact form API with MongoDB database integration and email functionality using Resend.

## Files Created

### 1. Configuration

- **`.env.local`** - Environment variables for MongoDB and Resend API

### 2. Database

- **`src/lib/db.ts`** - MongoDB connection using Mongoose
- **`src/lib/models/Contact.ts`** - Mongoose schema for contact form submissions

### 3. Email

- **`src/components/emails/ContactEmail.tsx`** - React Email template for contact notifications
- **`src/lib/email.ts`** - Email service using Resend API

### 4. API

- **`src/app/api/contact/route.ts`** - POST endpoint for form submissions

### 5. Frontend

- **`src/components/Contact.tsx`** - Updated with API integration and status messages

## Setup Instructions

### Step 1: Environment Variables

Update `.env.local` with your actual values:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/solutioneers?retryWrites=true&w=majority

# Resend API Key (get from https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Admin Email (to receive form submissions)
ADMIN_EMAIL=info@solutioneers.in
```

### Step 2: MongoDB Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user with password
4. Get the connection string and update `MONGODB_URI` in `.env.local`
5. Replace `username`, `password`, `cluster`, and database name as needed

### Step 3: Resend Setup

1. Sign up at https://resend.com
2. Create a new API key in your dashboard
3. Update `RESEND_API_KEY` in `.env.local`
4. Note: For production, verify your domain in Resend settings

**Important**: In development mode, Resend uses a test domain (`onboarding@resend.dev`). For production, you'll need to verify your domain.

### Step 4: Install Dependencies

The following packages have already been installed:

- `mongoose` - MongoDB ODM
- `resend` - Email service
- `react-email` - Email template builder
- `axios` - HTTP client (optional, already installed)

## API Endpoint

### POST `/api/contact`

**Request Body:**

```json
{
	"name": "John Doe",
	"email": "john@example.com",
	"company": "Acme Corp",
	"service": "web-development",
	"budget": "100k-300k",
	"message": "I need a new website..."
}
```

**Valid Service Values:**

- `web-development`
- `mobile-app-development`
- `ui-ux-design`
- `digital-marketing`
- `seo-services`
- `other`

**Valid Budget Values:**

- `under-25k`
- `25k-50k`
- `50k-100k`
- `100k-300k`
- `over-300k`
- `not-sure`

**Success Response (201):**

```json
{
	"success": true,
	"message": "Form submitted successfully",
	"contactId": "507f1f77bcf86cd799439011",
	"emailIds": {
		"admin": "email-id-1",
		"user": "email-id-2"
	}
}
```

**Error Response (400/500):**

```json
{
	"success": false,
	"error": "Error message describing what went wrong"
}
```

## Features

✅ **Form Validation**

- All required fields are validated
- Email format validation
- Service and budget enum validation

✅ **Database Storage**

- Contact submissions are saved to MongoDB
- Timestamps automatically recorded
- Status tracking (new, responded, archived)

✅ **Email Notifications**

- Admin receives notification with full submission details
- Customer receives confirmation email
- Professional HTML email templates

✅ **Error Handling**

- Comprehensive error messages
- Graceful failure handling
- Console logging for debugging

✅ **User Feedback**

- Success message displayed in green
- Error message displayed in red
- Auto-dismisses after 5 seconds

## Testing

1. Start development server: `bun dev`
2. Navigate to the contact form
3. Fill out all required fields
4. Click Submit
5. Check for:
    - Success message on the page
    - Email in your inbox (check spam folder)
    - Entry in MongoDB database

## Monitoring

### Check Form Submissions in MongoDB

```javascript
// Using MongoDB Compass or Atlas web interface
db.contacts.find().sort({ createdAt: -1 });
```

### Monitor Email Status in Resend

Visit https://resend.com/emails to view:

- All sent emails
- Delivery status
- Open/click rates
- Bounce information

## Troubleshooting

### "MongoDB connection failed"

- Verify `MONGODB_URI` is correct
- Check IP whitelist in MongoDB Atlas (add 0.0.0.0/0 for development)
- Ensure database user has correct password

### "Resend API error"

- Verify `RESEND_API_KEY` is correct
- Check if API key has billing enabled
- In development, emails will appear in test/preview mode

### "Email not received"

- Check spam/junk folder
- Verify `ADMIN_EMAIL` is correct
- Check Resend dashboard for delivery status
- In production, domain must be verified in Resend

### "Form submission fails silently"

- Check browser console for errors
- Check server logs in terminal
- Verify `MONGODB_URI` is set and valid

## Next Steps

### Production Deployment

Before deploying to production:

1. **Resend Domain Verification**
    - Add your domain to Resend
    - Update email sender from `onboarding@resend.dev` to your domain

2. **MongoDB Production Settings**
    - Set appropriate IP whitelist
    - Enable backups
    - Configure connection pooling

3. **Environment Variables**
    - Add to your hosting platform's environment variables
    - Never commit `.env.local` to git (already in `.gitignore`)

4. **Email Template Customization**
    - Update `ADMIN_EMAIL` to your actual email
    - Customize email content in `ContactEmail.tsx`
    - Add company branding/logo if desired

## File Structure

```
src/
├── app/
│   └── api/
│       └── contact/
│           └── route.ts          # API endpoint
├── lib/
│   ├── db.ts                      # DB connection
│   ├── email.ts                   # Email service
│   └── models/
│       └── Contact.ts             # Mongoose schema
├── components/
│     └── Contact.tsx                # Form component
├── emails/
│       └── ContactEmail.tsx       # Email template
└── ...
```

## Support

For issues or questions:

- Check MongoDB Atlas documentation: https://docs.mongodb.com/
- Resend documentation: https://resend.com/docs
- React Email documentation: https://react.email
