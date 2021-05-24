import React from "react";
import styles from "./JobExhibitCard.module.scss";

import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  company: string;
  location: string;
  jobType: string;
}

const JobExhibitCard = ({
  image,
  title,
  company,
  location,
  jobType,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src={image} width="74" height="74" />
      </div>
      <div className={styles.card_details}>
        <h3 className={styles.card_title}>{title}</h3>
        <div className={styles.card_info}>
          <p className={styles.card_infoText}>{company}</p>
        </div>

        <div className={styles.card_info}>
          <Image src="/svg/location.svg" width="16.56" height="24.96" />
          <p className={styles.card_infoText}>{location}</p>
        </div>

        <div className={styles.card_info}>
          <Image src="/svg/calendar.svg" width="16.56" height="24.96" />
          <p className={styles.card_infoText}>{jobType}</p>
        </div>
      </div>
    </div>
  );
};

export default JobExhibitCard;
