import { Page } from "../classes/page";
import gsap from "gsap";
import { each } from "lodash";

import { BeliefBtn } from "../elements/beliefBtn";
import { BeliefBtnAlt } from "../elements/beliefBtnAlt";
import { FeatBtn } from "../elements/featBtns";
import { FeatText } from "../elements/featText";

export class Home extends Page {
  constructor() {
    super({
      heroTitle: '[data-animation="heroTitle"]',
      heroDesc: '[data-animation="heroDesc"]',
      heroFloater: '[data-animation="heroFloater"]',
      heroImage: '[data-animation="heroImage"]',
      heroButtons: '[data-animation="heroButtons"]',
      heroChecks: '[data-animation="heroChecks"]',
      heroBrands: '[data-animation="heroBrands"]',
      scrollContainer: '[data-animation="scroll-container"]',
      smoothScroll: '[data-animation="smooth-scroll"]',
      beliefImg: "[data-animation='beliefImg']",
      beliefBtn: "[data-animation='beliefBtn']",
      featBtnOne: "[data-animation='featBtn1']",
      featBtnTwo: "[data-animation='featBtn2']",
      texts: "[data-animation='texts']",
    });
  }

  resetElements(): void {
    const heroImage = this.components.heroImage[0];
    const parent = heroImage.parentElement;

    // set parent container to visible
    parent.style.overflow = "visible";
    parent.style.display = "flex";
    parent.style.justifyContent = "center";
    parent.style.alignItems = "center";
    // set transform origin to center
    heroImage.style.transformOrigin = "center";

    each(
      [
        ...this.components.heroFloater,
        ...this.components.heroTitle,
        ...this.components.heroDesc,
        ...this.components.heroButtons,
        ...this.components.heroChecks,
        ...this.components.heroBrands,
      ],
      (item, index) => {
        item.style.visibility = "hidden";
      }
    );
  }

  createPseudo(after: any, width: number, height: number): void {
    const parent = this.components.heroImage[0].parentElement;

    [after].forEach((item) => {
      item.style.width = `${width}px`;
      item.style.height = `${height + 5}px`;
      item.style.zIndex = `${15}`;
      item.style.backgroundColor = "#fff";
      item.style.position = "fixed";
      item.style.inset = "0";
      item.style.margin = "auto";
      item.style.transform = "scale(0.8)";

      parent.appendChild(item);
    });
  }

  startPreAnimation(): void {
    // move image to center of viewport
    const heroImage: HTMLElement = this.components?.heroImage[0];
    const { x, y, width, height }: DOMRect = heroImage?.getBoundingClientRect();

    if (!heroImage) {
      setTimeout(() => {
        this.startPreAnimation();
      }, 0.5);
    }

    // reset elements
    this.resetElements();

    // create pseudo elements
    /// style after and before elements
    const after = document.createElement("div");
    this.createPseudo(after, width, height);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const yCenter = y + height / 2;
    const xCenter = x + width / 2;

    const distY = vh / 2 - yCenter;
    const distX = vw / 2 - xCenter;

    // start gsap
    const tl = gsap.timeline();

    tl.fromTo(
      heroImage,
      {
        autoAlpha: 0,
        scale: 0.7,
        duration: 0,
      },
      {
        autoAlpha: 1,
        x: distX,
        y: distY,
        duration: 0,
      }
    );

    tl.to(heroImage, {
      zIndex: 10,
    });

    tl.to(after, {
      y: "100%",
      ease: "power2.inOut",
      duration: 1.5,
    });

    tl.to(after, {
      display: "none",
      duration: 0,
    });

    tl.call(() => {
      this.emit("kill-preloader");
    });

    tl.to(heroImage, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "expo.out",
    });

    tl.call(() => {
      this.animateText();
      this.animateFloaters();
    });

    tl.to(heroImage, {
      zIndex: "initial",
      duration: 0,
    });
  }

  animateFloaters(): void {
    const floaters = this.components.heroFloater;

    gsap.to(floaters, {
      autoAlpha: 1,
      stagger: 0.1,
    });

    gsap.to(floaters[0], {
      repeat: -1,
      x: 20,
      yoyo: true,
      yoyoEase: true,
      ease: "sine.inOut",
      duration: 3.5,
    });

    gsap.to(floaters[2], {
      repeat: -1,
      y: 10,
      yoyo: true,
      yoyoEase: true,
      ease: "sine.inOut",
      duration: 2,
    });

    gsap.to(floaters[1], {
      repeat: -1,
      y: 5,
      x: 10,
      yoyo: true,
      yoyoEase: true,
      ease: "sine.inOut",
      duration: 2.5,
    });
  }

  animateText(): void {
    const title = this.components.heroTitle;
    const desc = this.components.heroDesc;
    const buttons = this.components.heroButtons;
    const checks = this.components.heroChecks;
    const brands = this.components.heroBrands;

    const tl: GSAPTimeline = gsap.timeline();

    tl.call(this.createComponentAnimations.bind(this));

    // initialize smooth scroll if device type isn't mobile
    !globalThis.ismobile && tl.call(this.initSmoothScroll.bind(this));

    tl.fromTo(
      [title, desc, buttons, checks, brands],
      {
        y: 40,
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "expo.out",
        duration: 2.5,
      }
    );
  }

  createComponentAnimations() {
    globalThis.ismobile
      ? new BeliefBtnAlt({
          element: this.elements.beliefImg,
          elements: { floaters: this.elements.beliefBtn },
        })
      : new BeliefBtn({
          element: this.elements.beliefImg,
          elements: { floaters: this.elements.beliefBtn },
        });

    each(this.components.texts, (text) => {
      new FeatText({
        element: text,
        elements: {
          texts: text,
          scrollContainer: this.elements.scrollContainer,
        },
      });
    });

    const featuresButtons: string[] = [
      this.elements.featBtnOne,
      this.elements.featBtnTwo,
    ];

    each(featuresButtons, (group) => {
      new FeatBtn({
        element: group,
        elements: {
          btns: group,
          scrollContainer: this.elements.scrollContainer,
        },
      });
    });
  }
}
