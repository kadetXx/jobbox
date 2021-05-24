import React from "react";
import styles from "./Hero.module.scss";

import { Header, Form, ScrollScreen } from "../index";

const Hero = () => {
  return (
    <div id={styles.hero}>
      <Header />
      <section className={styles.textbox}>
        <h1 className={styles.textbox_heading}>
          There’s a bun <br /> in the Oven!
        </h1>
        <p className={styles.textbox_subheading}>
          Jobbox is bringing to you the very best. Be the <br /> first to know
          when we launch.
        </p>
      </section>
      <div className={styles.hero_formContainer}>
        <Form btnType="secondary" btnText="Stay in the loop!" inputClass="input__light" />
      </div>
      <ScrollScreen />
    </div>
  );
};

export default Hero;
