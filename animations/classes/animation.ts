import { Component } from "./component";
import gsap from "gsap";
import NormalizeWheel from "normalize-wheel";
export class Animation extends Component {
  observe: any;
  observer: any;
  observerOptions: any;
  scroll: any;
  frame: any;

  constructor({ element, elements }) {
    // call methods here
    super({ element, elements });

    this.observerOptions = {
      // rootMargin: "0px 0px -15% 0px",
      threshold: 1.0,
    };

    this.scroll = {
      target: 0,
      current: 0,
      limit: 0,
    };

    this.addEventListeners();
    this.onResize();
    this.createObserver();
    this.updateScrollPosition();
  }

  addEventListeners() {
    document.addEventListener("mousewheel", this.onMouseWheel.bind(this));
    document.addEventListener("resize", this.onResize.bind(this));
  }

  onMouseWheel(e: WheelEvent) {
    const { pixelY } = NormalizeWheel(e);
    this.scroll.target += pixelY;
  }

  onResize() {
    if (this.elements.scrollContainer) {
      this.scroll.limit =
        (this.elements.scrollContainer[0].clientHeight - window.innerHeight);
    }
  }

  updateScrollPosition() {
    this.scroll.target = gsap.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );

    this.scroll.current = gsap.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      0.05
    );

    this.frame = window.requestAnimationFrame(
      this.updateScrollPosition.bind(this)
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
