import React from "react";
import styles from "./PictureStack.module.scss";

import Image from "next/image";

const PictureStack = () => {
  const images = [
    {
      src: "/img/stack-four.png",
      tilt: "0",
    },
    {
      src: "/img/stack-three.png",
      tilt: "-10",
    },
    {
      src: "/img/stack-two.png",
      tilt: "0",
    },
    {
      src: "/img/stack-one.png",
      tilt: "-4",
    },
  ];

  return (
    <div id={styles.stack}>
      {images.map((item, index) => (
        <div
          className={styles.stack_item}
          key={index}
          style={{ transform: `rotate(${item.tilt}deg)`, zIndex: index + 1 }}
        >
          {index === images.length - 1 && (
            <div className={styles.stack_clip}>
              <Image src="/svg/paperclip.svg" width="64" height="64" />
            </div>
          )}
          <Image src={item.src} width="425.87" height="534" />
        </div>
      ))}
    </div>
  );
};

export default PictureStack;
