import React from "react";
import styles from "./FloatingIcons.module.scss";

import Image from "next/image";

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

  return (
    <div id={styles.icons}>
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
