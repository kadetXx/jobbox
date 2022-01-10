import { Component } from "./component";
import gsap from "gsap";
import NormalizeWheel from "normalize-wheel";
export class Animation extends Component {
  observe: any;
  observer: any;
  observerOptions: any;
  scroll: any;
  frame: any;
  finishPoint: number;

  touch: {
    isDown: boolean;
    position?: number;
    start?: number;
  };

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

    this.touch = {
      isDown: false,
    };

    this.finishPoint = 1;

    this.addEventListeners();
    this.onResize();
    this.createObserver();
    this.updateScrollPosition();
  }

  onMouseWheel(e: WheelEvent) {
    if (!globalThis.ismobile) {
      const { pixelY } = NormalizeWheel(e);
      this.scroll.target += pixelY;
    }
  }

  onScroll() {
    if (globalThis.ismobile) {
      const top = document.documentElement.scrollTop;
      this.scroll.target += top;
    }
  }

  onTouchMove(event: any) {
    if (!this.touch.isDown) return;

    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = (this.touch.start - y) * 2;

    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.touch.isDown = false;
  }

  onTouchDown(event: any) {
    this.touch.isDown = true;

    this.scroll.position = this.scroll.current;
    this.touch.start = event.touches ? event.touches[0].clientY : event.clientY;
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
      globalThis.ismobile ? 0.1 : 0.05
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

  addEventListeners() {
    window.addEventListener("mousewheel", this.onMouseWheel.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));
    window.addEventListener("touchstart", this.onTouchDown.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this));
    window.addEventListener("touchend", this.onTouchUp.bind(this));
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  animateIn() {}
  animateOut() {}
}
