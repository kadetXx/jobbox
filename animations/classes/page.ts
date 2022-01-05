interface PageInterface {
  components: any;
  create(components: any): void;
}

import { EventEmitter } from "events";
import { each } from "lodash";
export class Page extends EventEmitter implements PageInterface {
  components: any;
  elements: any;

  constructor({ ...elements }: any) {
    super();
    this.elements = elements;
  }

  create() {
    this.components = {};
    // for each of the data type passed in, select all and then save it as an item in this.elements
    each(this.elements, (component: any, key: any) => {
      this.components[key] = document.querySelectorAll(component);
    });
  }

  // add general page methods here like event listeners, show and hide
}
