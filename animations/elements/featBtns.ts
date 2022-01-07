import { Animation } from "../classes/animation";
import gsap from "gsap";

export class FeatBtn extends Animation {
  scrollPosition: number;
  scrollHeight: number;
  frame: any;
  mapped: number;
  scroll: any;

  constructor({ element, elements, scrollHeight, scrollPosition }) {
    super({ element, elements });

    this.scrollHeight = scrollHeight / 2;
    this.scrollPosition = scrollPosition;
    this.mapScroll();    
  }

  mapScroll() {
    const [first, second] = this.elements.btns;

    const displacement = 500;
    this.mapped = displacement / this.scrollHeight;

    gsap.set(first, {
      x: -displacement,
    });

    this.animateButtons();
  }

  animateButtons() {
    const [first, second] = this.elements.btns;

    first.style.transform = `translateX(${
      this.scrollPosition * this.mapped - 500
    })`;

    this.frame = window.requestAnimationFrame(this.animateButtons.bind(this));
  }
}
