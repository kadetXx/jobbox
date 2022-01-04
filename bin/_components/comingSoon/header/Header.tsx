import React from "react";
import styles from "./Header.module.scss";

import { Logo } from "@/shared";

const Header = ({ inputRef }) => {
  const focusForm = (el: any) => {
    const form: HTMLInputElement = el.children[0].children[0];
    form.focus();
  };
  return (
    <div id={styles.header}>
      <Logo width="154.8px" height="37.2px" />
      <button
        onClick={() => focusForm(inputRef.current)}
        className={`btn bg-transparent bd-secondary secondary br-5 ${styles.header_btn}`}
      >
        Stay Updated
      </button>
    </div>
  );
};

export default Header;
