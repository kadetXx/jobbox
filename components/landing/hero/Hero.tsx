import React from "react";
import styles from "./Hero.module.scss";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/shared";
import { brands } from "@/mock";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_textsection}>
        <h1 className={styles.hero_title} data-animation="heroTitle">
          Bridging the gap between{" "}
          <span className={styles.hero_titleAlt}>talent</span> &{" "}
          <span className={styles.hero_titleAlt}>opportunities</span>
        </h1>
        <p className={styles.hero_desc}>
          The online platform that allows job seekers and recruiters to meet on
          a level playing field.
        </p>
        <div className={styles.hero_buttons}>
          <Button onClick={null} type="primary" className={styles.hero_button}>
            Get Started for Free
          </Button>
          <Link href="/">
            <a className={styles.hero_button}>
              <Image src="/svg/play-icon.svg" width="14.42" height="16" />{" "}
              <span>How It Works</span>
            </a>
          </Link>
        </div>
        <div className={styles.hero_checks}>
          <div className={styles.hero_checker}>
            <Image src="/svg/checkmark.svg" width="16" height="16" />
            <span>Works Anywhere</span>
          </div>
          <div className={styles.hero_checker}>
            <Image src="/svg/checkmark.svg" width="16" height="16" />
            <span>Completely Free</span>
          </div>
          <div className={styles.hero_checker}>
            <Image src="/svg/checkmark.svg" width="16" height="16" />
            <span>No Hidden fees</span>
          </div>
        </div>
      </div>

      <div className={styles.hero_imagesection}>
        <div className={styles.hero_imageContainer}>
          <Image src="/svg/hero-image.svg" layout="fill" />

          <div className={styles.hero_imageFloat} data-animation="heroFloater">
            <Image src="/svg/hero-float-one.svg" layout="fill" />
          </div>
          <div className={styles.hero_imageFloat} data-animation="heroFloater">
            <Image src="/svg/hero-float-two.svg" layout="fill" />
          </div>
          <div className={styles.hero_imageFloat} data-animation="heroFloater">
            <Image src="/svg/hero-float-three.svg" layout="fill" />
          </div>
        </div>
      </div>

      <div className={styles.hero_brands}>
        {brands.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            title={item.name}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
