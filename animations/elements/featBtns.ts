import { Animation } from "../classes/animation";
import gsap from "gsap";
export class FeatBtn extends Animation {
  frameIII: any;
  mapped: number;
  scroll: any;
  displacement: any;

  constructor({ element, elements }) {
    super({ element, elements });

    this.mapDistanceToAnimation();
  }

  mapDistanceToAnimation() {
    this.displacement = 250;
    this.mapped = this.displacement / this.rect.targetDistanceY;

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
