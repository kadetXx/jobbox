import React, { ReactElement } from "react";
import styles from "./Features.module.scss";

import Link from "next/link";
import { features } from "@/mock";

const Features = (): ReactElement => {
  return (
    <div className={styles.features}>
      {features.map((item, index) => (
        <div className={styles.feature} key={index}>
          <div data-animation="texts" className={styles.feature_textContainer}>
            <span className={styles.feature_tag}>
              <svg
                width="15"
                height="4"
                viewBox="0 0 19 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H19" stroke="#060613" strokeWidth="1" />
              </svg>
              {item.tag}
            </span>
            <h2 className={styles.feature_title}>{item.title}</h2>
            <p className={styles.feature_description}>{item.description}</p>
            <Link href={item.link.url}>
              <a className={styles.feature_cta}>{item.link.text}</a>
            </Link>
          </div>

          <div className={styles.feature_imgContainer}>
            <div className={styles.feature_imgBgWrap}>
              <div className={styles.feature_imgBg}></div>
              <div className={styles.feature_screen}>
                <figure>
                  <img
                    className={styles.feature_screen}
                    src={item.images.main}
                    alt="feature screen"
                  />
                </figure>
              </div>
              <div className={styles.feature_floaters}>
                {item.images.floaters.map((item, i) => (
                  <div
                    data-animation={`featBtn${index + 1}`}
                    className={`${styles.feature_floater} ${
                      styles[`feature_floater_${index + 1}`]
                    }`}
                    key={i}
                  >
                    <figure>
                      <img src={item} alt="feature button" />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
