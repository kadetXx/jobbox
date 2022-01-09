import { media } from "./media.mock";

const {
  landing: { features: images },
} = media;

export const features = [
  {
    tag: "RECRUITERS",
    title: "Hiring has never been easier.",
    description:
      "We believe Hiring should be as easy as shopping online. From targeted job listings to engagement messages to review and analysis, we make the recruitment process seamless.",
    link: {
      text: "Find Talent Now",
      url: "/",
    },
    images: {
      main: images.screenOne,
      floaters: [images.buttonOne, images.buttonTwo],
    },
  },

  {
    tag: "JOB SEEKERS",
    title: "Grow your Career in the best Companies.",
    description:
      "Your career is important to us. We make it easy for you and the best employers to find each other. ",
    link: {
      text: "Find a Job Now",
      url: "/",
    },
    images: {
      main: images.screenTwo,
      floaters: [images.buttonThree, images.buttonFour],
    },
  },
];
