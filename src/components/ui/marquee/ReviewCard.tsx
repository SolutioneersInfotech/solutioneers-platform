import React from "react";
import Image from "next/image";
import styles from "./ReviewCard.module.scss";

export interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

export function ReviewCard({ img, name, username, body }: ReviewCardProps) {
  return (
    <figure className={styles["review-card"]}>
      <div className={styles["review-card__header"]}>
        <div className={styles["review-card__avatar-wrapper"]}>
          <Image
            className={styles["review-card__avatar"]}
            src={img}
            width={36}
            height={36}
            alt={`${name}'s avatar`}
          />
        </div>
        <div className={styles["review-card__meta"]}>
          <figcaption className={styles["review-card__name"]}>
            {name}
          </figcaption>
          <p className={styles["review-card__username"]}>{username}</p>
        </div>
      </div>
      <blockquote className={styles["review-card__body"]}>{body}</blockquote>
    </figure>
  );
}
