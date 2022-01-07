import { Component } from "./component";
export class Animation extends Component {
  observe: any;
  observer: any;
  observerOptions: any;

  constructor({ element, elements }) {
    // call methods here
    super({ element, elements });

    this.observerOptions = {
      // rootMargin: "0px 0px -15% 0px",
      threshold: 1.0,
    };

    this.createObserver();
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
