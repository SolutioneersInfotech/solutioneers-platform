'use client';
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaPhoneAlt } from 'react-icons/fa'
import Input from './ui/input/Input'
import { FaArrowUpLong, FaLocationArrow } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import Select from './ui/select/Select'
import Textarea from './ui/textarea/Textarea';
import { Button } from './ui/button/button';

interface ContactFormData {
    name: string
    email: string
    company: string
    message: string,
    service: string,
    budget: string
}
const serviceOptions = [
    {
        value: "",
        label: "Select a service",
        props: { disabled: true },
    },
    {
        value: "web-development",
        label: "Web Development",
    },
    {
        value: "mobile-app-development",
        label: "Mobile App Development",
    },
    {
        value: "ui-ux-design",
        label: "UI/UX Design",
    },
    {
        value: "digital-marketing",
        label: "Digital Marketing",
    },
    {
        value: "seo-services",
        label: "SEO Services",
    },
    {
        value: "other",
        label: "Other (Please specify in message)",
    },
];

const budgetOptions = [
    {
        value: "",
        label: "Select your budget",
        props: { disabled: true },
    },
    {
        value: "under-25k",
        label: "Under ₹25,000",
    },
    {
        value: "25k-50k",
        label: "₹25,000 - ₹50,000",
    },
    {
        value: "50k-100k",
        label: "₹50,000 - ₹100,000",
    },
    {
        value: "100k-300k",
        label: "₹100,000 - ₹300,000",
    },
    {
        value: "over-300k",
        label: "₹300,000+",
    },
    {
        value: "not-sure",
        label: "Not sure yet",
    },
];

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>()

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        await new Promise((r) => setTimeout(r, 1000))
        alert('Form submitted: ' + JSON.stringify(data, null, 2))
        reset()
    }

    return (
        <section className="contact" id="contact">
            <div className="left-info">
                <h1>Let&apos;s make problems nervous.</h1>
                <p>
                    Have a question? Want to collaborate? Just want to say hi? We are all
                    ears.
                </p>
                <div className="contact-info">
                    <div className="contact-item">
                        <a href="mailto:info@solutioneers.in">
                            <div className="card-icon">
                                <IoMail />

                            </div>
                            <div>
                                <h2>Email us</h2>
                                <p>info@solutioneers.in</p>
                            </div>
                        </a>
                        <FaArrowUpLong />

                    </div>
                    <div className="contact-item">
                        <a href="tel:+917376700783">
                            <div className="card-icon">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h2>Call us</h2>
                                <p>+917376700783</p>
                            </div>
                        </a>
                        <FaArrowUpLong />

                    </div>
                    <div className="contact-item">
                        <a
                            href="https://www.google.com/maps/place/123+Main+St,+Your+City"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="card-icon">
                                <FaLocationArrow />
                            </div>
                            <div>
                                <h2>Our Location</h2>
                                <p>123 Main St, Your City</p>
                            </div>
                        </a>
                        <FaArrowUpLong />

                    </div>
                </div>
            </div>
            <div className="right-form">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <div className="form-group">
                        <Input
                            label="Full Name *"
                            placeholder="John Doe"
                            {...register("name", { required: "Name is required" })}
                            error={errors.name?.message}
                        />

                        <Input
                            label="Email *"
                            type="email"
                            placeholder="john.doe@example.com"
                            {...register("email", { required: "Email is required" })}
                            error={errors.email?.message}
                        />
                    </div>

                    <div className="form-group">
                        <Input
                            label="Company"
                            placeholder="Your Company Name"
                            {...register("company")}
                            error={errors.company?.message}
                        />

                        <Select
                            label="Budget Range *"
                            options={budgetOptions}
                            {...register("budget", { required: "Budget is required" })}
                            error={errors.budget?.message}
                        />
                    </div>

                    <Select
                        label="Service Interested In *"
                        options={serviceOptions}
                        {...register("service", { required: "Service is required" })}
                        error={errors.service?.message}
                    />

                    <Textarea
                        label="Your Message *"
                        placeholder="Write your message here..."
                        rows={5}
                        {...register("message", { required: "Message is required" })}
                        error={errors.message?.message}
                    />

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="solid"
                        className="submit"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </div>
        </section>
    )
}
