import { EventEmitter } from "events";

export class Component extends EventEmitter {
  constructor({ element, elements }) {
    super();
    this.create(element, elements);
  }

  create(element, elements) {
    // get all the clasnames passed in
    // for each of the data type passed in, select all and then save it as an item in this.elements
  }

  // add general component methods here like destroy, etc
}
