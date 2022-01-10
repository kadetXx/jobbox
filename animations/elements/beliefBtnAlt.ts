import { Parallax } from "../classes/parallax";
import gsap from "gsap";

export class BeliefBtnAlt extends Parallax {
  constructor({ element, elements }) {
    super({
      element,
      elements,
      params: {
        displacement: 50,
      },
    });
  }

  init(): void {
    super.init();
    
    gsap.set(this.element, {
      y: this.displacement,
    });

    this.animateButton();
  }

  animateButton(): void {
    const mappedvalue: number = this.rect.currentDistanceY * this.mapped;

    gsap.set(this.element, {
      y: mappedvalue,
      stagger: 0.1,
    });

    this.frameIII = window.requestAnimationFrame(this.animateButton.bind(this));
  }
}
