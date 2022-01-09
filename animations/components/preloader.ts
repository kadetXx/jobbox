interface PreloaderType {
  progress: number;
  percentage: number;
}

import { Component } from "../classes/component";
import { each, throttle } from "lodash";
import gsap from "gsap";

import { flattenObj } from "@/helpers";
import { media } from "@/mock";

import { eventEmitter as nextEmitter } from "@/helpers";
export class Preloader extends Component implements PreloaderType {
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

  startLoad() {
    this.allMedia = flattenObj(media);

    each(this.allMedia, (url: any) => {
      const fakeImage = new Image();

      fakeImage.src = url;

      fakeImage.onload = () => {
        this.onAssetLoaded();
      };
    });
  }

  async onAssetLoaded() {
    this.progress++;

    this.percentage = Math.round((this.progress / this.allMedia.length) * 100);

    this.elements.percentage[0].innerText = `${this.percentage}%`;

    if (this.percentage === 100) {
      // emit event to next js mount page
      nextEmitter.emit("preloader-finish");

      // set loading to completed so animations can start
      this.onLoadingComplete();
    }
  }

  onLoadingComplete() {
    const tl = gsap.timeline({ delay: 1.4 });

    tl.call(() => {
      this.emit("start-pre-anim");
    });

    tl.to(this.elements.percentage, {
      filter: "blur(2px) grayscale(100%)",
      autoAlpha: 0,
      ease: 'expo.out',
      duration: 1.6
    });
  }

  kill() {
    gsap.to(this.element, {
      autoAlpha: 0,
      duration: 1,
      // ease:",
    });
  }
}
