import React, { useEffect, useCallback, useRef } from "react";
import styles from "./FrontLayout.module.scss";

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/mock";

import { Logo, Button, Preloader } from "@/shared";

import { App } from "@/animations";

interface Props {
  children: React.ReactNode;
  page: string;
}

const Front = ({ children, page }) => {
  const hasInit = useRef(false);

  useEffect(() => {
    !hasInit.current && init();
  }, []);

  const init = useCallback(() => {
    new App({ page });
    hasInit.current = true;
  }, []);

  return (
    <>
      <Preloader />
      <div className={styles.layout} data-animation='scroll-container'>
        <div className={styles.layout_wrapper} data-animation="smooth-scroll">
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

          <footer className={styles.footer}>
            <div className={styles.footer_logo}>
              <Logo type="default" width={null} />
            </div>
            <p className={styles.footer_copyright}>
              Copyright &copy; 2021 Jobbox Limited. All rights reserved.
            </p>
            <div className={styles.footer_socials}>
              <Image src="/svg/facebook.svg" width="20" height="20" />
              <Image src="/svg/twitter.svg" width="20" height="20" />
              <Image src="/svg/instagram.svg" width="20" height="20" />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Front;
