import React from "react";
import styles from "./reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.reviewsList}>
      {reviews.map((review, index) => (
        <li key={index} className={styles.reviewItem}>
          <div className={styles.reviewer}>
            <div className={styles.reviewerInitial}>{review.reviewer_name.charAt(0)}</div>
            <div className={styles.reviewerDetails}>
              <span className={styles.reviewerName}>{review.reviewer_name}</span>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={styles.star} fill={i < review.reviewer_rating ? "yellow" : "transparent"}>
                    <use xlinkHref="#icon-star" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={styles.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
