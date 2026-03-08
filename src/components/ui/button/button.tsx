import React from "react";
import "./button.scss";

type Variant =
    | "gradient"
    | "solid"
    | "shadow"
    | "outline"
    | "link";

type ButtonProps = {
    variant?: Variant;
    href?: string;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    variant = "solid",
    href,
    disabled,
    children,
    className = "",
    ...props
}: ButtonProps) => {

    const classes =
        `button button--${variant} ${disabled ? "disabled" : ""} ${className}`;

    const content = (
        <div className="btn-text-container">
            <div className="btn-text">{children}</div>
            <div className="btn-text-hover">{children}</div>
        </div>
    );

    if (href) {
        return (
            <div className="button-wrapper">
                <a className={classes} href={href}>
                    {content}
                </a>
            </div>
        );
    }

    return (
        <div className="button-wrapper">
            <button className={classes} disabled={disabled} {...props}>
                {content}
            </button>
        </div>
    );
};