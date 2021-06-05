import React, { useRef, useState, useEffect } from "react";

import styles from "./ScrollScreen.module.scss";

import { JobExhibitCard } from "@/shared";
import { jobs } from "@/mock";

import gsap from "gsap";

import ScrollToPlugin from "gsap/ScrollToPlugin";

const ScrollScreen = () => {
  const [itemHeight, setItemHeight] = useState<number>(0);
  const [itemPadding, setItemPadding] = useState(24);
  const [activeSlide, setActiveSlide] = useState(1);

  const scrollerRef = useRef(null);

  const scroll = (index: number) => {

    let scrollerContainer: HTMLDivElement = scrollerRef.current;

    const slide: HTMLDivElement =
      scrollerRef.current.children[0].children[index];

    let slideOffset = slide.offsetTop;
    let slideHeight = slide.clientHeight;
    let containerHeight = scrollerContainer.clientHeight;

    let scrollBy = slideOffset - (containerHeight - slideHeight) / 2;

    gsap.to(scrollerContainer, {
      duration: 0.2,
      scrollTo: { y: scrollBy },
      ease: "power2",
    }).then(() => setActiveSlide(index));

  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const slide: HTMLDivElement = scrollerRef.current.children[0].children[0];
    const slideHeight = slide.clientHeight;

    setItemHeight(slideHeight);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (activeSlide !== jobs.length - 2) {
        scroll(activeSlide + 1);
      } else if (activeSlide === jobs.length - 2) {
        scroll(1);
      }
    }, 700);
  }, [activeSlide]);

  const getScrollerHeight = (
    numberOfSlideItems: number,
    heightOfSingleItem: number,
    padding: number
  ) => {
    const height = (numberOfSlideItems + 2) * (heightOfSingleItem + padding); //- padding;

    return height;
  };

  return (
    <div id={styles.scrollScreen}>
      <div className={styles.scroller} ref={scrollerRef}>
        <div
          onClick={() => scroll(3)}
          className={styles.scroller_inner}
          style={{
            height: `${getScrollerHeight(
              jobs.length,
              itemHeight,
              itemPadding
            )}px`,
          }}
        >
          {jobs.map((item, index) => (
            <div
              className={`${
                activeSlide === index ? styles.scroller_item__active : styles.scroller_item
              }`}
              key={item.company + index}
            >
              <JobExhibitCard
                title={item.title}
                company={item.company}
                image={item.image}
                jobType={item.jobType}
                location={item.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollScreen;
