import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import styles from "./Marquee.module.scss";

export interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /** Optional CSS class name to apply custom styles */
  className?: string;
  /** Whether to reverse the animation direction @default false */
  reverse?: boolean;
  /** Whether to pause the animation on hover @default false */
  pauseOnHover?: boolean;
  /** Content to be displayed in the marquee */
  children: React.ReactNode;
  /** Whether to animate vertically instead of horizontally @default false */
  vertical?: boolean;
  /** Number of times to repeat the content @default 4 */
  repeat?: number;
  /** Animation duration in seconds @default 40 */
  duration?: number;
  /** Gap between items @default "1rem" */
  gap?: string;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40,
  gap = "1rem",
  style,
  ...props
}: MarqueeProps) {
  const containerClasses = [
    styles.marquee,
    vertical ? styles["marquee--vertical"] : styles["marquee--horizontal"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const trackClasses = [
    styles.marquee__track,
    vertical
      ? styles["marquee__track--vertical"]
      : styles["marquee__track--horizontal"],
    reverse ? styles["marquee__track--reverse"] : "",
    pauseOnHover ? styles["marquee__track--pause-on-hover"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  const cssVars = {
    "--marquee-duration": `${duration}s`,
    "--marquee-gap": gap,
    ...style,
  } as CSSProperties;

  return (
    <div {...props} className={containerClasses} style={cssVars}>
      {Array.from({ length: repeat }, (_, i) => (
        <div key={i} className={trackClasses} aria-hidden={i > 0}>
          {children}
        </div>
      ))}
    </div>
  );
}
