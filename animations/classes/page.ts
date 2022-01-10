import { EventEmitter } from "events";
import { each } from "lodash";
import NormalizeWheel from "normalize-wheel";
import gsap from "gsap";
import Prefix from "prefix";

export class Page extends EventEmitter {
  components: any;
  elements: any;
  frame: number;
  transformPrefix: any;
  scroll: {
    target: number;
    current: number;
    limit: number;
    position?: number;
  };

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

  create(): void {
    this.components = {};
    // for each of the data type passed in, select all and then save it as an item in this.elements
    each(this.elements, (component: any, key: any) => {
      this.components[key] = document.querySelectorAll(component);
    });
  }

  onTouchMove(event: any): void {
    if (!this.touch.isDown) return;

    const y: number = event.touches ? event.touches[0].clientY : event.clientY;
    const distance: number = (this.touch.start - y) * 2;

    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp(event: any): void {
    this.touch.isDown = false;
  }

  onTouchDown(event: any): void {
    this.touch.isDown = true;

    this.scroll.position = this.scroll.current;
    this.touch.start = event.touches ? event.touches[0].clientY : event.clientY;
  }

  // add general page methods here like event listeners, show and hide
  onMouseWheel(e: WheelEvent): void {
    const { pixelY } = NormalizeWheel(e);
    this.scroll.target += pixelY;
  }

  onResize(): void {
    this.scroll.limit =
      this.components.scrollContainer[0].clientHeight - window.innerHeight - 1;
  }

  updateScroll(): void {
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

    this.components.smoothScroll[0].style[
      this.transformPrefix
    ] = `translateY(-${this.scroll.current}px)`;
  }

  initSmoothScroll(): void {
    // set body :overflow to hidden
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";

    this.updateScroll();
    this.frame = window.requestAnimationFrame(this.initSmoothScroll.bind(this));
  }

  addEventListeners(): void {
    window.addEventListener("mousewheel", this.onMouseWheel.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));
    window.addEventListener("touchstart", this.onTouchDown.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this));
    window.addEventListener("touchend", this.onTouchUp.bind(this));
  }
}
