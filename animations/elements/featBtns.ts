import { Parallax } from "../classes/parallax";
import gsap from "gsap";

export class FeatBtn extends Parallax {
  constructor({ element, elements }) {
    super({
      element,
      elements,
      params: {
        displacement: 250,
      },
    });
  }

  init(): void {
    super.init();
    
    gsap.set(this.elements.btns, {
      y: this.displacement,
    });

    this.animateButtons();
  }

  animateButtons(): void {
    const mappedvalue: number = this.rect.currentDistanceY * this.mapped;

    gsap.set(this.elements.btns, {
      y: mappedvalue,
      stagger: 0.1,
    });

    this.frameIII = window.requestAnimationFrame(
      this.animateButtons.bind(this)
    );
  }
}
