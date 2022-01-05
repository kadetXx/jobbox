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
        images: "img",
      },
    });

    this.startLoad();
    this.progress = 0;
  }

  startLoad() {
    each(this.elements.images, (item: any) => {
      const image = new Image();
      image.src = item.src;

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
    const tl = gsap.timeline({ delay: 1 });

    tl.set(this.elements.percentage, {
      autoAlpha: 0,
      duration: 1,
    });

    tl.call(
      () => {
        this.emit("start-pre-anim");
      },
      [],
      0.7
    );
    this.emit("start-pre-anim");
  }

  kill() {
    console.log(this.element);

    gsap.to(this.element, {
      autoAlpha: 0,
      duration: 1,
      // ease:",
    });
  }
}
