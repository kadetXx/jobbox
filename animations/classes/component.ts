interface CompInterface {
  element: any;
  elements: any;
  create(element: string, elements: string): void;
}

import { EventEmitter } from "events";
import { each } from "lodash";

export class Component extends EventEmitter implements CompInterface {
  element: any;
  elements: any;

  constructor({ element, elements }) {
    super();
    this.create(element, elements);
  }

  create(element: any, elements: any) {
    if (element instanceof window.HTMLElement) {
      this.element = element;
    } else {
      this.element = document.querySelector(element);
    }

    this.elements = {};

    each(elements, (item: any, key: any) => {
      console.log(item);

      if (item instanceof window.HTMLElement) {
        this.elements[key] = item;
      } else {
        this.elements[key] = document.querySelectorAll(item);
      }
    });
  }

  // add general component methods here like destroy, etc
}
