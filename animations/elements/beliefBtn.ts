import { Animation } from "../classes/animation";
import gsap from "gsap";
import { each } from "lodash";

export class BeliefBtn extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });
  }

  animateIn() {
    super.animateIn();

    alert("observer start");

    gsap.to(this.elements.floaters, {
      y: 0,
      stagger: 0.3,
      ease: "expo.out",
      // delay: 0.5,
      duration: 2,
    });
  }

  animateOut() {
    super.animateOut();

    alert("observer enddd");

    gsap.to(this.elements.floaters, {
      y: "-200%",
      ease: "elastic.out(1, 0.3)",
    });
  }
}
