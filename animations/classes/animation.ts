import { Component } from "./component";
import gsap from "gsap";
export class Animation extends Component {
  observe: any;
  observer: any;
  observerOptions: any;
  rect: any;
  frame: any;
  frameII: any;

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

  calculateDistanceY() {
    const { y, height } = this.element.getBoundingClientRect();
    this.rect.distanceY = y + height / 2 - window.innerHeight / 2;

    this.updateTargetDistanceY();
  }

  updateTargetDistanceY() {
    const endPoint = globalThis.ismobile
      ? window.innerHeight / 3
      : window.innerHeight / 2;
      
    const { y, height } = this.element.getBoundingClientRect();
    const newValue = y + height / 2 - endPoint;

    const clamped = gsap.utils.clamp(0, this.rect.distanceY, newValue);
    this.rect.targetDistanceY = clamped;

    this.frameII = window.requestAnimationFrame(
      this.updateTargetDistanceY.bind(this)
    );
  }

  updateCurrentDistanceY() {
    this.rect.currentDistanceY = gsap.utils.interpolate(
      this.rect.currentDistanceY,
      this.rect.targetDistanceY,
      globalThis.ismobile ? 0.1 : 0.05
    );

    this.frame = window.requestAnimationFrame(
      this.updateCurrentDistanceY.bind(this)
    );
  }

  // create intersection observer method to animate in and out
  createObserver() {
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

  animateIn() {}
  animateOut() {}
}
