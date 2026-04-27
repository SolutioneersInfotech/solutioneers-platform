import React from "react";
import { Marquee } from "./Marquee";
import { ReviewCard } from "./ReviewCard";
import styles from "./MarqueeDemo.module.scss";

// ── Data ──────────────────────────────────────────────────────────────────────

export interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

const reviews: Review[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

// ── Component ─────────────────────────────────────────────────────────────────

export function MarqueeDemo() {
  return (
    <div className={styles["marquee-demo"]}>
      <Marquee
        pauseOnHover
        duration={20}
        className={styles["marquee-demo__row"]}
      >
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <Marquee
        reverse
        pauseOnHover
        duration={20}
        className={styles["marquee-demo__row"]}
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Fade edges */}
      <div
        className={`${styles["marquee-demo__fade"]} ${styles["marquee-demo__fade--left"]}`}
        aria-hidden="true"
      />
      <div
        className={`${styles["marquee-demo__fade"]} ${styles["marquee-demo__fade--right"]}`}
        aria-hidden="true"
      />
    </div>
  );
}
