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

  create(element: string, elements: any) {
    this.element = document.querySelector(element);

    this.elements = {};
    each(elements, (item: any, key: any) => {
      this.elements[key] = document.querySelectorAll(item);
    });
  }

  // add general component methods here like destroy, etc
}
