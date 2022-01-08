import React from "react";
import styles from "./Hero.module.scss";

import Link from "next/link";

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
        <p className={styles.hero_desc} data-animation="heroDesc">
          The online platform that allows job seekers and recruiters to meet on
          a level playing field.
        </p>
        <div className={styles.hero_buttons} data-animation="heroButtons">
          <Button onClick={null} type="primary" className={styles.hero_button}>
            Get Started for Free
          </Button>
          <Link href="/">
            <a className={styles.hero_button}>
              <img src="/svg/play-icon.svg" width="14.42" height="16" />{" "}
              <span>How It Works</span>
            </a>
          </Link>
        </div>
        <div className={styles.hero_checks} data-animation="heroChecks">
          <div className={styles.hero_checker}>
            <div className={styles.hero_check}>
              <figure>
                <img src="/svg/checkmark.svg" />
              </figure>
            </div>
            <span>Works Anywhere</span>
          </div>
          <div className={styles.hero_checker}>
            <div className={styles.hero_check}>
              <figure>
                <img src="/svg/checkmark.svg" />
              </figure>
            </div>
            <span>Completely Free</span>
          </div>
          <div className={styles.hero_checker}>
            <div className={styles.hero_check}>
              <figure>
                <img src="/svg/checkmark.svg" />
              </figure>
            </div>
            <span>No Hidden fees</span>
          </div>
        </div>
      </div>

      <div className={styles.hero_imagesection}>
        <div className={styles.hero_imageContainer}>
          <figure>
            <img
              data-animation="heroImage"
              className={styles.hero_image}
              src="/svg/hero-image.svg"
            />
          </figure>

          <div className={styles.hero_imageFloat} data-animation="heroFloater">
            <figure>
              <img src="/svg/hero-float-one.svg" />
            </figure>
          </div>
          <div className={styles.hero_imageFloat} data-animation="heroFloater">
            <figure>
              <img src="/svg/hero-float-two.svg" />
            </figure>
          </div>
          <div className={styles.hero_imageFloat} data-animation="heroFloater">
            <figure>
              <img src="/svg/hero-float-three.svg" />
            </figure>
          </div>
        </div>
      </div>

      <div className={styles.hero_brands} data-animation="heroBrands">
        {brands.map((item, index) => (
          <div
            className={styles.hero_brand}
            key={index}
            style={{
              width: `${item.width / 16}rem`,
              height: `${item.height / 16}rem`,
            }}
          >
            <figure>
              <img key={index} src={item.image} title={item.name} />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
