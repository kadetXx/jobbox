import { Animation } from "../classes/animation";
import gsap from "gsap";
export class FeatBtn extends Animation {
  scrollPosition: number;
  scrollHeight: number;
  frame: any;
  mapped: number;
  scroll: any;

  constructor({ element, elements }) {
    super({ element, elements });

    // this.scrollHeight = scrollHeight / 2;
    this.mapScroll();
  }

  mapScroll() {
    const [first, second] = this.elements.btns;

    const displacement = 500;
    // this.mapped = displacement / this.scrollHeight;
    this.mapped = displacement / (this.scroll.limit / 2);

    gsap.set(first, {
      x: -displacement,
    });

    this.animateButtons();
  }

  animateButtons() {
    const [first, second] = this.elements.btns;

    gsap.set(first, {
      x: this.scroll.current * this.mapped - 500,
    });

    this.frame = window.requestAnimationFrame(this.animateButtons.bind(this));
  }
}
