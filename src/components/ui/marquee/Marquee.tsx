import React, { ComponentPropsWithoutRef } from "react";
import "./Marquee.scss";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
}

export default function Marquee({
    className = "",
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {

    const containerClasses = [
        "marquee",
        vertical ? "vertical" : "horizontal",
        pauseOnHover ? "pause-on-hover" : "",
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div {...props} className={containerClasses}>
            {Array.from({ length: repeat }).map((_, i) => {
                const trackClasses = [
                    "marquee-track",
                    vertical ? "vertical" : "horizontal",
                    reverse ? "reverse" : ""
                ]
                    .filter(Boolean)
                    .join(" ");

                return (
                    <div key={i} className={trackClasses}>
                        {children}
                    </div>
                );
            })}
        </div>
    );
}