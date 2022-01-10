import { Parallax } from "../classes/parallax";
import gsap from "gsap";

export class FeatText extends Parallax {
  frameIII: any;
  mapped: number;
  scroll: any;
  displacement: number;

  constructor({ element, elements }) {
    super({
      element,
      elements,
      params: {
        displacement: window.innerWidth < 600 ? 70 : 150,
      },
    });
  }

  init() {
    gsap.set(this.elements.texts, {
      y: this.displacement,
    });

    this.animateText();
  }

  animateText() {
    const mappedvalue = this.rect.currentDistanceY * this.mapped;

    gsap.set(this.elements.texts, {
      y: mappedvalue,
    });

    this.frameIII = window.requestAnimationFrame(this.animateText.bind(this));
  }
}
