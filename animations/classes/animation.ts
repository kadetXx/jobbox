import { Component } from "./component";
import gsap from "gsap";

export class Animation extends Component {
  observer: IntersectionObserver;
  observerOptions: {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
  };

  rect: {
    distanceY: number;
    targetDistanceY: number;
    currentDistanceY: number;
  };

  frame: number;
  frameII: number;

  constructor({ element, elements }) {
    // call methods here
    super({ element, elements });

    this.observerOptions = {
      // rootMargin: "0px 0px -20% 0px",
      threshold: 1,
    };

    this.rect = {
      distanceY: 0,
      targetDistanceY: 0,
      currentDistanceY: 0,
    };

    this.createObserver();
    this.calculateDistanceY();
    this.updateCurrentDistanceY();
  }

  calculateDistanceY(): void {
    const { y, height }: DOMRect = this.element.getBoundingClientRect();
    this.rect.distanceY = y + height / 2 - window.innerHeight / 2;

    this.updateTargetDistanceY();
  }

  updateTargetDistanceY(): void {
    const endPoint: number = globalThis.ismobile
      ? window.innerHeight / 4
      : window.innerHeight / 3;

    const { y, height }: DOMRect = this.element.getBoundingClientRect();
    const newValue: number = y + height / 2 - endPoint;

    const clamped: number = gsap.utils.clamp(
      0,
      this.rect.distanceY + 50,
      newValue
    );
    this.rect.targetDistanceY = clamped;

    this.frameII = window.requestAnimationFrame(
      this.updateTargetDistanceY.bind(this)
    );
  }

  updateCurrentDistanceY(): void {
    this.rect.currentDistanceY = gsap.utils.interpolate(
      this.rect.currentDistanceY,
      this.rect.targetDistanceY,
      0.1
    );

    this.frame = window.requestAnimationFrame(
      this.updateCurrentDistanceY.bind(this)
    );
  }

  // create intersection observer method to animate in and out
  createObserver(): void {
    this.observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    }, this.observerOptions);

    this.element && this.observer.observe(this.element);
  }

  animateIn(): void {}
  animateOut(): void {}
}
