import React from "react";
import "./Textarea.scss";

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
    error?: string;
}

export default function Textarea({
    label,
    name,
    error,
    ...props
}: TextareaProps) {
    return (
        <div className={`inputBx ${error ? "has-error" : ""}`}>
            <label htmlFor={name}>{label}</label>

            <textarea
                id={name}
                name={name}
                aria-invalid={!!error}
                {...props}
            />

            {error && <p className="input-error">{error}</p>}
        </div>
    );
}