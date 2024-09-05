import React from "react";
import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  hospitalName: string;
  imgSrc: string;
}

const Card = ({ hospitalName, imgSrc }: CardProps) => {
  return (
    <InteractiveCard>
      <img src={imgSrc} alt="Vaccine Information" className={styles.image} />
      <div className={styles.textContainer}>
        <h2>{hospitalName}</h2>
        <p>description</p>
      </div>
    </InteractiveCard>
  );
};

export default Card;
