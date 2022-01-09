interface PageInterface {
  components: any;
  create(components: any): void;
}

import { EventEmitter } from "events";
import { each } from "lodash";
import NormalizeWheel from "normalize-wheel";
import gsap from "gsap";
import Prefix from "prefix";
export class Page extends EventEmitter implements PageInterface {
  components: any;
  elements: any;
  scroll: any;
  frame: any;
  transformPrefix: any;
  touch: {
    isDown: boolean;
    position?: number;
    start?: number;
  };

  constructor({ ...elements }: any) {
    super();
    this.elements = elements;
    this.transformPrefix = Prefix("transform");

    this.scroll = {
      target: 0,
      current: 0,
      limit: 0,
    };

    this.touch = {
      isDown: false,
    };
  }

  create() {
    this.components = {};
    // for each of the data type passed in, select all and then save it as an item in this.elements
    each(this.elements, (component: any, key: any) => {
      this.components[key] = document.querySelectorAll(component);
    });
  }

  onTouchMove(event: any) {
    if (!this.touch.isDown) return;

    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = (this.touch.start - y) * 2;

    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp(event: any) {
    this.touch.isDown = false;
  }

  onTouchDown(event: any) {
    this.touch.isDown = true;

    this.scroll.position = this.scroll.current;
    this.touch.start = event.touches ? event.touches[0].clientY : event.clientY;
  }

  // add general page methods here like event listeners, show and hide
  onMouseWheel(e: WheelEvent) {
    const { pixelY } = NormalizeWheel(e);
    this.scroll.target += pixelY;
  }

  onResize() {
    this.scroll.limit =
      this.components.scrollContainer[0].clientHeight - window.innerHeight - 1;
  }

  updateScroll() {
    this.scroll.target = gsap.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );

    this.scroll.current = gsap.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      window.innerWidth < 600 ? 0.1 : 0.05
    );

    this.components.smoothScroll[0].style[
      this.transformPrefix
    ] = `translateY(-${this.scroll.current}px)`;
  }

  initSmoothScroll() {
    // set body :overflow to hidden
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";

    this.updateScroll();
    this.frame = window.requestAnimationFrame(this.initSmoothScroll.bind(this));
  }

  addEventListeners() {
    window.addEventListener("mousewheel", this.onMouseWheel.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));
    window.addEventListener("touchstart", this.onTouchDown.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this));
    window.addEventListener("touchend", this.onTouchUp.bind(this));
  }
}
