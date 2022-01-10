import { Animation } from "../classes/animation";
import gsap from "gsap";
export class FeatBtn extends Animation {
  frame: any;
  mapped: number;
  scroll: any;

  constructor({ element, elements }) {
    super({ element, elements });

    // this.mapScroll();
  }

  // mapScroll() {
  //   const [first, second] = this.elements.btns;

  //   const displacement = 250;
  //   this.mapped = displacement / this.scroll.limit;

  //   gsap.set([first, second], {
  //     y: displacement,
  //   });

  //   this.animateButtons();
  // }

  // animateButtons() {
  //   const [first, second] = this.elements.btns;

  //   gsap.set([first, second], {
  //     y: -this.scroll.current * this.mapped + 250,
  //     stagger: 0.2,
  //   });

  //   this.frame = window.requestAnimationFrame(this.animateButtons.bind(this));
  // }
}
