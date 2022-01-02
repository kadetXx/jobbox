import { Page } from "../classes/page";

export class Home extends Page {
  constructor() {
    super({
      heroTitle: "[data-anim='heroTitle']",
      heroFloater: "[data-anim='heroFloater']",
    });
  }
}
