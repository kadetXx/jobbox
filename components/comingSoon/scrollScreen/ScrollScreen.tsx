import React, { useRef, useEffect } from "react";

import styles from "./ScrollScreen.module.scss";

import { JobExhibitCard } from "@/shared";

import Marquee from "react-fast-marquee";

const jobs = [
  {
    title: "Senior Product Designer",
    company: "BBC News",
    image: "/svg/bbc.svg",
    jobType: "Full time",
    location: "Remote",
  },

  {
    title: "Senior Product Designer",
    company: "BBC News",
    image: "/svg/float-eight.svg",
    jobType: "Full time",
    location: "Remote",
  },

  {
    title: "Senior Product Designer",
    company: "BBC News",
    image: "/svg/bbc.svg",
    jobType: "Full time",
    location: "Remote",
  },

  {
    title: "Customer Service",
    company: "BBC News",
    image: "/svg/float-five.svg",
    jobType: "Full time",
    location: "Remote",
  },

  {
    title: "Senior Product Designer",
    company: "BBC News",
    image: "/svg/bbc.svg",
    jobType: "Full time",
    location: "Remote",
  },
];

const ScrollScreen = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {

    setTimeout(() => {
      marqueeRef !== null && (marqueeRef.current.children[0].id = 'marqueeId');

      console.log(marqueeRef.current.children[0]);
    }, 1000);
    
    
  }, [marqueeRef])

  return (
    <div id={styles.scrollScreen}>
      <div className={styles.scroller} ref={marqueeRef}>
        <Marquee className={styles.marquee} speed={50} >
          {jobs.map((item, index) => (
            <JobExhibitCard
              key={item.company + index}
              title={item.title}
              company={item.company}
              image={item.image}
              jobType={item.jobType}
              location={item.location}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ScrollScreen;
