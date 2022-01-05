import React from "react";
import styles from "./Cta.module.scss";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/shared";

const Cta = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.cta_wrapper}>
        <h2 className={styles.cta_title}>
          It’s a <span>JobWorld</span>
        </h2>
        <p className={styles.cta_description}>
          For job seekers it's a simple way to find jobs, and for recruiters
          it's a powerful job-posting tool with an easy-to-use interface.
        </p>
        <div className={styles.cta_buttons} data-animation="ctaButtons">
          <Button onClick={null} type="primary" className={styles.cta_button}>
            Get Started for Free
          </Button>
          <Link href="/">
            <a className={styles.cta_button}>
              <Image src="/svg/play-icon-green.svg" width="14.42" height="16" />{" "}
              <span>How It Works</span>
            </a>
          </Link>
        </div>
        <div className={styles.cta_checks} data-animation="ctaChecks">
          <div className={styles.cta_checker}>
            <Image src="/svg/checkmark.svg" width="16" height="16" />
            <span>Works Anywhere</span>
          </div>
          <div className={styles.cta_checker}>
            <Image src="/svg/checkmark.svg" width="16" height="16" />
            <span>Completely Free</span>
          </div>
          <div className={styles.cta_checker}>
            <Image src="/svg/checkmark.svg" width="16" height="16" />
            <span>No Hidden fees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
