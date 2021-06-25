import React, { useEffect, useRef } from "react";
import styles from "./FloatingIcons.module.scss";
import { useIntersecting } from "@/hooks";
import gsap from "gsap";

const FloatingIcons = () => {
  const icons = [
    {
      src: "/svg/float-one.svg",
      position: "-1.5",
    },
    {
      src: "/svg/float-two.svg",
      position: "3.5",
    },
    {
      src: "/svg/float-three.svg",
      position: "0.7",
    },
    {
      src: "/svg/float-four.svg",
      position: "-3",
    },
    {
      src: "/svg/float-five.svg",
      position: "2.5",
    },
    {
      src: "/svg/float-six.svg",
      position: "0.5",
    },
    {
      src: "/svg/float-seven.svg",
      position: "-1.5",
    },
    {
      src: "/svg/float-eight.svg",
      position: "4",
    },
    {
      src: "/svg/float-nine.svg",
      position: "-1",
    },
    {
      src: "/svg/float-ten.svg",
      position: "-4",
    },
  ];

  const iconsRef = useRef(null);
  const onScreen = useIntersecting(iconsRef);

  useEffect(() => {
    const icons = iconsRef.current.children;

    if (onScreen) {
      gsap.from([...icons], {
        scale: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    }
  }, [onScreen]);

  return (
    <div id={styles.icons} ref={iconsRef}>
      {icons.map((item, index) => (
        <div
          className={styles.icon_container}
          key={index}
          style={{ transform: `translateY(${item.position}rem)` }}
        >
          <img src={item.src} />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
