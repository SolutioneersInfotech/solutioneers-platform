import React from "react";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: string;
    type?: string;
}

export default function Input({
    label,
    type = "text",
    name,
    error,
    ...props
}: InputProps) {
    return (
        <div className={`inputBx ${error ? "has-error" : ""}`}>
            <label htmlFor={name}>{label}</label>

            <input type={type} id={name} name={name} {...props} />

            {error && <p className="input-error">{error}</p>}
        </div>
    );
}