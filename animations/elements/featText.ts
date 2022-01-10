import { Parallax } from "../classes/parallax";
import gsap from "gsap";

export class FeatText extends Parallax {
  constructor({ element, elements }) {
    super({
      element,
      elements,
      params: {
        displacement: window.innerWidth < 600 ? 70 : 150,
      },
    });
  }

  init(): void {
    super.init();
    
    gsap.set(this.elements.texts, {
      y: this.displacement,
    });

    this.animateText();
  }

  animateText(): void {
    const mappedvalue: number = this.rect.currentDistanceY * this.mapped;

    gsap.set(this.elements.texts, {
      y: mappedvalue,
    });

    this.frameIII = window.requestAnimationFrame(this.animateText.bind(this));
  }
}
