import { Animation } from "../classes/animation";
import gsap from "gsap";

export class FeatText extends Animation {
  frame: any;
  mapped: number;
  scroll: any;

  constructor({ element, elements }) {
    super({ element, elements });

    this.mapScroll();
  }

  mapScroll() {
    const displacement = 150;
    this.mapped = displacement / this.scroll.limit;

    gsap.set(this.elements.texts, {
      y: -displacement,
    });

    this.animateText();
  }

  animateText() {
    gsap.set(this.elements.texts, {
      y: this.scroll.current * this.mapped - 150,
    });

    this.frame = window.requestAnimationFrame(this.animateText.bind(this));
  }
}
