'use client';
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import Input from './ui/input/Input'
import { FaArrowUpLong, FaLocationArrow } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import Select from './ui/select/Select'
import Textarea from './ui/textarea/Textarea';
import { Button } from './ui/button/button';
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import axios from 'axios';

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
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' })

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control
    } = useForm<ContactFormData>();

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        console.log(data);
        try {
            setSubmitStatus({ type: null, message: '' })

            const response = await axios.post('/api/contact', data)
            const result = response.data;

            if (result.error) {
                setSubmitStatus({
                    type: 'error',
                    message: result.error || 'Failed to submit form. Please try again.',
                })
                return
            }

            setSubmitStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
            })
            reset()

            setTimeout(() => {
                setSubmitStatus({ type: null, message: '' })
            }, 5000)
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred. Please try again later.',
            })
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="titleHeader">
                <h2>Contact Us</h2>
            </div>
            <div className="contactContent">

                <div className="left-info">
                    <h1>Let&apos;s make problems nervous.</h1>
                    <p>
                        Have a question? Want to collaborate? Just want to say hi? We are all
                        ears.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item-left">
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
                        <div className="contact-item-left">
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
                        <div className="contact-item-left">
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
                <div className="right-contact-form">
                    {submitStatus.type && (
                        <div
                            style={{
                                padding: '12px 16px',
                                marginBottom: '16px',
                                borderRadius: '4px',
                                backgroundColor:
                                    submitStatus.type === 'success'
                                        ? '#d4edda'
                                        : '#f8d7da',
                                color:
                                    submitStatus.type === 'success'
                                        ? '#155724'
                                        : '#721c24',
                                border:
                                    submitStatus.type === 'success'
                                        ? '1px solid #c3e6cb'
                                        : '1px solid #f5c6cb',
                            }}
                        >
                            {submitStatus.message}
                        </div>
                    )}
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

                            <Controller
                                name="budget"
                                control={control}
                                rules={{
                                    required: "Budget is required",
                                    validate: (value) => value !== "" || "Budget is required",
                                }}
                                render={({ field }) => (
                                    <Select
                                        label="Budget Range *"
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.budget?.message}
                                    >
                                        {budgetOptions.map((option, index) => (
                                            <option key={option.value || index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />
                        </div>

                        <Controller
                            name="service"
                            control={control}
                            rules={{
                                required: "Service is required",
                                validate: (value) => value !== "" || "Service is required",
                            }}
                            render={({ field }) => (
                                <Select
                                    label="Service Interested In *"
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={errors.service?.message}
                                >
                                    {serviceOptions.map((option, index) => (
                                        <option key={option.value || index} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Select>
                            )}
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
            </div>
        </section>
    )
}
