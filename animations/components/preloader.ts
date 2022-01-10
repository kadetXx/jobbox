import { Component } from "../classes/component";
import { each } from "lodash";
import gsap from "gsap";

import { flattenObj, eventEmitter as nextEmitter } from "@/utils";
import { media } from "@/mock";

export class Preloader extends Component {
  progress: number;
  percentage: number;
  allMedia: string[];

  constructor() {
    super({
      element: '[data-animation="preloader"]',
      elements: {
        percentage: '[data-animation="preloader_percent"]',
        images: "[data-src]",
      },
    });

    this.startLoad();
    this.progress = 0;
  }

  startLoad(): void {
    this.allMedia = flattenObj(media);

    each(this.allMedia, (url: any) => {
      const fakeImage: HTMLImageElement = new Image();

      fakeImage.src = url;

      fakeImage.onload = () => {
        this.onAssetLoaded();
      };
    });
  }

  onAssetLoaded(): void {
    this.progress++;

    this.percentage = Math.round((this.progress / this.allMedia.length) * 100);

    this.elements.percentage[0].innerText = `${this.percentage}%`;

    if (this.percentage === 100) {
      // emit event to next js mount page
      nextEmitter.emit("preloading-completed");

      // set loading to completed so animations can start
      this.onLoadingComplete();
    }
  }

  onLoadingComplete(): void {
    const tl: GSAPTimeline = gsap.timeline({ delay: 1.4 });

    tl.call(() => {
      this.emit("preloading-completed");
    });

    tl.to(this.elements.percentage, {
      filter: "blur(1px) grayscale(100%)",
      autoAlpha: 0,
      ease: "expo.out",
      duration: 1.6,
    });
  }

  kill(): void {
    gsap.to(this.element, {
      autoAlpha: 0,
      duration: 1,
    });
  }
}
