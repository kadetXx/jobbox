interface PreloaderType {
  progress: number;
  percentage: number;
}

import { Component } from "../classes/component";
import { each } from "lodash";
import gsap from "gsap";
export class Preloader extends Component implements PreloaderType {
  progress: number;
  percentage: number;

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
    each(this.elements.images, (image: any) => {
      image.src = image.getAttribute("data-src");

      image.onload = () => this.onAssetLoaded();
    });
  }

  onAssetLoaded() {
    this.progress++;
    this.percentage = Math.round(
      (this.progress / this.elements.images.length) * 100
    );

    this.elements.percentage[0].innerText = `${this.percentage}%`;
    this.percentage === 100 && this.onLoadingComplete();
  }

  onLoadingComplete() {
    const tl = gsap.timeline({ delay: 1.4 });

    gsap.to(this.elements.percentage, {
      autoAlpha: 0,
      duration: 0.5,
      delay: 1,
    });

    gsap.to(this.elements.percentage, {
      scale: 0,
      duration: 1,
      delay: 1,
      ease: 'sine.out'
    });

    tl.call(() => {
      this.emit("start-pre-anim");
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
