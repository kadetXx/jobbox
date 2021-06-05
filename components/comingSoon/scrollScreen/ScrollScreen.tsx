import React, { useRef, useState, useEffect } from "react";

import styles from "./ScrollScreen.module.scss";

import { JobExhibitCard } from "@/shared";
import { jobs } from "@/mock";

import gsap from "gsap";

import ScrollToPlugin from "gsap/ScrollToPlugin";

const ScrollScreen = () => {
  const [itemHeight, setItemHeight] = useState<number>(0);
  const [itemPadding, setItemPadding] = useState(48);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollerRef = useRef(null);

  const scroll = (index: number) => {
    // console.table({
    //   to: index,
    //   direction: direction,
    // });

    let scrollerContainer: HTMLDivElement = scrollerRef.current;

    const slide: HTMLDivElement =
      scrollerRef.current.children[0].children[index];

    let slideOffset = slide.offsetTop;
    let slideHeight = slide.clientHeight;
    let containerHeight = scrollerContainer.clientHeight;

    let scrollBy = slideOffset - (containerHeight - slideHeight) / 2;

    gsap.to(scrollerContainer, {
      duration: 0.5,
      scrollTo: { y: scrollBy },
      ease: "power2",
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const slide: HTMLDivElement = scrollerRef.current.children[0].children[0];
    const slideHeight = slide.clientHeight;

    setItemHeight(slideHeight);
  }, []);

  useEffect(() => {
    activeSlide === jobs.length - 1 && setActiveSlide(0)

    setTimeout(() => {
      if (activeSlide !== jobs.length - 1) {
        scroll(activeSlide + 1);
        setActiveSlide(activeSlide + 1);
      }
    }, 1000);
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
            <div className="slide" key={item.company + index}>
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
