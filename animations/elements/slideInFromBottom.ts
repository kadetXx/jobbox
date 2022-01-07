import { Animation } from "../classes/animation";
import gsap from "gsap";

export class SlideInFromBottom extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });

    if ('IntersectionObserver' in window) {
      this.animateOut()
    }
  }

  animateIn(): void {
    super.animateIn();

    gsap.to(
      this.elements.texts,
      // {
      //   y: 40,
      // },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "sine.out",
      }
    );
  }

  animateOut(): void {
    super.animateOut();
  
    gsap.set(this.elements.texts, {
      y: '50%'
    });
  }
}
