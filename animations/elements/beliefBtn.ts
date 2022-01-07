import { Animation } from "../classes/animation";
import gsap from "gsap";
import { each } from "lodash";

export class BeliefBtn extends Animation {
  shouldAnimate: boolean;
  tl: any;

  constructor({ element, elements }) {
    super({ element, elements });
    this.shouldAnimate = true;

    if ('IntersectionObserver' in window) {
      this.animateOut()
    }
  }

  animateIn() {
    super.animateIn();

    const tl = gsap.timeline();

    tl.set(this.element, {
      autoAlpha: 0,
    });

    tl.fromTo(
      this.element,
      {
        y: "100%",
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: "expo.out",
        duration: 1,
      }
    );

    tl.to(
      this.elements.floaters,
      // { y: "-100%", autoAlpha: 0 },
      {
        y: 0,
        stagger: 0.2,
        ease: "sine.out",
        autoAlpha: 1,
      },
      0.5
    );
  }

  animateOut() {
    super.animateOut();

    gsap.set(this.element, {
      autoAlpha: 0,
    });

    gsap.set(this.elements.floaters, {
      autoAlpha: 0,
      y: "-80%",
    });
  }
}
