import React, { useEffect, useCallback } from "react";
import styles from "./FrontLayout.module.scss";

import Link from "next/link";
import { navLinks } from "@/mock";

import { Logo, Button, Preloader } from "@/shared";

import { App } from "@/animations";

interface Props {
  children: React.ReactNode;
  page: string;
}

const Front = ({ children, page }) => {
  useEffect(() => {
    init();
  }, []);

  const init = useCallback(() => {
    new App({ page });
  }, []);

  return (
    <>
      <Preloader />
      <div className={styles.layout}>
        <header className={styles.header}>
          <Logo type="blue" width="109" height="27" />
          <nav className={styles.header_menu}>
            <ul className={styles.header_menuList}>
              {navLinks.frontLinks.map((item, index) => (
                <li className={styles.header_menuItem} key={index}>
                  <Link href={item.url}>
                    <a
                      target={item.blank ? "_blank" : "_self"}
                      className={styles.header_menuLink}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.header_buttons}>
            <Button
              type="secondary-outline"
              onClick={null}
              className={styles.header_button}
            >
              Apply For Jobs
            </Button>

            <Button
              type="secondary"
              onClick={null}
              className={styles.header_button}
            >
              Hire Talent
            </Button>
          </div>
        </header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Front;
