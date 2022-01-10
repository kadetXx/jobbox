import React, { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";

import styles from "./FrontLayout.module.scss";

import Link from "next/link";
import { navLinks, media } from "@/mock";

import { deviceType, eventEmitter } from "@/utils";

const [Logo, Button, Preloader] = [
  dynamic(() => import("@/shared/logo/Logo")),
  dynamic(() => import("@/shared/button/Button")),
  dynamic(() => import("@/shared/preloader/Preloader")),
];

interface Props {
  children: React.ReactNode;
  page: string;
}

const Front = ({ children, page }: Props) => {
  const hasInit = useRef<boolean>(false);
  const [hasPreloaded, setHasPreloaded] = useState<boolean>(false);

  const {
    shared: { socials },
  } = media;

  const init = useCallback(async () => {
    // check if device is mobile
    const ismobile: boolean = deviceType() === "mobile";

    // import animations
    const App = (await import("@/animations")).App;

    // initialize new animation
    new App({ page, ismobile });

    // update ref
    hasInit.current = true;
  }, []);

  useEffect(() => {
    !hasInit.current && init();

    // add event emmitter
    eventEmitter.once("preloading-completed", () => {
      setHasPreloaded(true);
    });
  }, []);

  useEffect(() => {
    hasPreloaded && eventEmitter.emit("content-mounted");
  }, [hasPreloaded]);

  // if (!hasPreloaded) {
  //   return <Preloader />;
  // }

  return (
    <>
      <Preloader />
      <div className={styles.layout} data-animation="scroll-container">
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
              <Link href="/">
                <a className={styles.footer_social}>
                  <img src={socials.fb} width="20" height="20" alt="facebook" />
                </a>
              </Link>
              <Link href="/">
                <a className={styles.footer_social}>
                  <img src={socials.tw} width="20" height="20" alt="twitter" />
                </a>
              </Link>
              <Link href="/">
                <a className={styles.footer_social}>
                  <img
                    src={socials.ig}
                    width="20"
                    height="20"
                    alt="instagram"
                  />
                </a>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Front;
