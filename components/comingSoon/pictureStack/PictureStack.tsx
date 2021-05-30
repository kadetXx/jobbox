import styles from "./PictureStack.module.scss";
import React, { useRef, useEffect } from "react";

import { useIntersecting } from "@/hooks";

import { TimelineLite, TweenLite, Power3 } from "gsap";

import Image from "next/image";

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

const PictureStack = () => {
  const imageContainer = useRef(null);
  const paperclip = useRef(null)
  const onScreen = useIntersecting(imageContainer, 0.5);

  useEffect(() => {
    // TweenLite.from(imageContainer.current, 1, {
    //   opacity: 0,
    //   ease: Power3.easeIn,
    // });

    const allItems = images.map((item, i) => {
      return imageContainer.current.children[i + 1];
    });

    if (onScreen) {
      TweenLite.to([...allItems], 0.1, {
        opacity: 1,
        ease: Power3.easeIn,
        stagger: 0.5,
      });

      TweenLite.from([...allItems], 1, {
        x: "-220%",
        scale: 2,
        ease: Power3.easeIn,
        stagger: 0.4,
      });
    } else {
      TweenLite.to([...allItems], 0.1, {
        opacity: 0,
        ease: Power3.easeIn,
      });
    }

  }, [onScreen]);

  return (
    <div
      id={styles.stack}
      ref={imageContainer}
      onClick={() => console.log(onScreen)}
    >
      {images.map((item, index) => (
        <div
          className={styles.stack_item}
          key={index}
          style={{ transform: `rotate(${item.tilt}deg)`, zIndex: index + 1 }}
        >
          {index === images.length - 1 && (
            <div className={styles.stack_clip} ref={paperclip}>
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
