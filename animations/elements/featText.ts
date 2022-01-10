import { Animation } from "../classes/animation";
import gsap from "gsap";

export class FeatText extends Animation {
  frameIII: any;
  mapped: number;
  scroll: any;
  displacement: number;

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
