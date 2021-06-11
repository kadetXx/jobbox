import styles from "./PictureStack.module.scss";
import React, { useRef, useEffect } from "react";

import { useIntersecting } from "@/hooks";

import { TimelineLite, TweenLite, Power3 } from "gsap";
import gsap from "gsap";

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
  const paperclip = useRef(null);
  const onScreen = useIntersecting(imageContainer, 0.5);

  useEffect(() => {
    const allItems = images.map((item, i) => {
      return imageContainer.current.children[i];
    });

    const allImageBoxes = images.map((item, i) => {
      return imageContainer.current.children[i].lastElementChild.children[0];
    });

    if (onScreen) {
      gsap.to([...allItems], {
        opacity: 1,
        ease: "power3",
        stagger: 0.5,
        duration: 0.1,
      });

      gsap.from([...allItems], {
        x: "-220%",
        scale: 1.2,
        ease: "power3",
        stagger: 0.5,
        duration: 1,
      });

      gsap.from([...allImageBoxes], {
        scale: 1.2,
        ease: "power3",
        stagger: 0.4,
        duration: 2,
      });

      gsap.from(paperclip.current, {
        y: "-300%",
        ease: "power3",
        duration: 0.5,
        delay: 2.5
      });

    } else {
      gsap.to([...allItems], {
        opacity: 0,
        ease: "power3",
        duration: 0.1,
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
          <div className={styles.stack_image}>
            {index === images.length - 1 && (
              <div className={styles.stack_clip} ref={paperclip}>
                <Image src="/svg/paperclip.svg" width="64" height="64" />
              </div>
            )}
            <Image src={item.src} width="425.87" height="534" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PictureStack;
