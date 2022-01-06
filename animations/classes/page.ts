interface PageInterface {
  components: any;
  create(components: any): void;
}

import { EventEmitter } from "events";
import { each } from "lodash";
import NormalizeWheel from "normalize-wheel";
import gsap from "gsap";
export class Page extends EventEmitter implements PageInterface {
  components: any;
  elements: any;
  scroll: any;
  frame: any;

  constructor({ ...elements }: any) {
    super();
    this.elements = elements;

    this.scroll = {
      target: 0,
      current: 0,
      limit: 0,
    };
  }

  create() {
    this.components = {};
    // for each of the data type passed in, select all and then save it as an item in this.elements
    each(this.elements, (component: any, key: any) => {
      this.components[key] = document.querySelectorAll(component);
    });
  }

  // add general page methods here like event listeners, show and hide
  onMouseWheel(e: WheelEvent) {
    const { pixelY } = NormalizeWheel(e);
    this.scroll.target += pixelY;
  }

  onResize() {
    this.scroll.limit =
      this.components.scrollContainer[0].clientHeight - window.innerHeight;
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
      0.1
    );

    this.components.smoothScroll[0].style.transform = `translateY(-${this.scroll.current}px)`;
  }

  initSmoothScroll() {
    this.updateScroll();
    this.frame = window.requestAnimationFrame(this.initSmoothScroll.bind(this));
  }

  addEventListeners() {
    document.addEventListener("mousewheel", this.onMouseWheel.bind(this));
    document.addEventListener("resize", this.onResize.bind(this));
  }
}
