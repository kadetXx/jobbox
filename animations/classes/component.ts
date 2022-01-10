import { EventEmitter } from "events";
import { each } from "lodash";

export class Component extends EventEmitter {
  element: HTMLElement;
  elements: any;

  constructor({ element, elements }) {
    super();
    this.create(element, elements);
  }

  create(element: any, elements: any): void {
    if (element instanceof window.HTMLElement) {
      this.element = element;
    } else {
      this.element = document.querySelector(element);
    }

    this.elements = {};

    each(elements, (item: any, key: any): void => {
      if (item instanceof window.HTMLElement) {
        this.elements[key] = item;
      } else {
        this.elements[key] = document.querySelectorAll(item);
      }
    });
  }
}
