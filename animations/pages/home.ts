import { Page } from "../classes/page";

export class Home extends Page {
  constructor() {
    super({
      heroTitle: '[data-animation="heroTitle"]',
      heroFloater: '[data-animation="heroFloater"]',
    });
  }
}
