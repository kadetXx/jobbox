import { Animation } from "../classes/animation";
import gsap from "gsap";

export class FeatText extends Animation {
  frame: any;
  mapped: number;
  scroll: any;
  displacement: number;

  constructor({ element, elements }) {
    super({ element, elements });

    // this.mapScroll();
  }

  // mapScroll() {
  //   this.displacement = window.innerWidth < 600 ? 70 : 150;
  //   this.mapped = this.displacement / this.scroll.limit;

  //   gsap.set(this.elements.texts, {
  //     y: -this.displacement,
  //   });

  //   this.animateText();
  // }

  // animateText() {
  //   gsap.set(this.elements.texts, {
  //     y: this.scroll.current * this.mapped - this.displacement,
  //   });

  //   this.frame = window.requestAnimationFrame(this.animateText.bind(this));
  // }
}
