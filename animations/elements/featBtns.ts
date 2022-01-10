import { Parallax } from "../classes/parallax";
import gsap from "gsap";
export class FeatBtn extends Parallax {
  frameIII: any;
  mapped: number;
  scroll: any;
  displacement: any;

  constructor({ element, elements }) {
    super({
      element,
      elements,
      params: {
        displacement: 250,
      },
    });
  }

  init() {
    gsap.set(this.elements.btns, {
      y: this.displacement,
    });

    this.animateButtons();
  }

  animateButtons() {
    const mappedvalue = this.rect.currentDistanceY * this.mapped;

    gsap.set(this.elements.btns, {
      y: mappedvalue,
      stagger: 0.1,
    });

    this.frameIII = window.requestAnimationFrame(
      this.animateButtons.bind(this)
    );
  }
}
