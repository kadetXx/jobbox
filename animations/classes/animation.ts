import { Component } from "./component";
import gsap from "gsap";
import NormalizeWheel from "normalize-wheel";
import { divide } from "lodash";
export class Animation extends Component {
  observe: any;
  observer: any;
  observerOptions: any;
  scroll: any;
  frame: any;
  finishPoint: number;

  constructor({ element, elements }) {
    // call methods here
    super({ element, elements });

    this.observerOptions = {
      // rootMargin: "0px 0px -20% 0px",
      threshold: 1,
    };

    this.scroll = {
      target: 0,
      current: 0,
      limit: 0,
    };

    this.finishPoint = 1;

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
      // calculate finish point of animation
      this.calculateFinishPoint();

      // get scrollable height
      const scrollableHeight =
        this.elements.scrollContainer[0].clientHeight - window.innerHeight;

      // set limit to calculated finish point
      this.scroll.limit = scrollableHeight * this.finishPoint;
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

  calculateFinishPoint() {
    // get scrollable height
    const scrollableHeight =
      this.elements.scrollContainer[0].clientHeight - window.innerHeight;

    // get distance of element's midpoint from top of viewport
    const { y, height } = this.element?.getBoundingClientRect() || {};
    const distanceBtw = y - window.innerHeight / 2 + height / 2;

    // set finishpoint to when the elemnt gets to middle of viewport
    this.finishPoint = distanceBtw / scrollableHeight;
  }

  animateIn() {}
  animateOut() {}
}