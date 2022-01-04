interface PageInterface {
  components: any;
  create(components: any): void;
}

import { each } from "lodash";
export class Page implements PageInterface {
  components: any;

  constructor({ ...components }: any) {
    this.create(components);
  }

  create(components: any) {
    this.components = {};
    // for each of the data type passed in, select all and then save it as an item in this.elements
    each(components, (component: any, key: any) => {
      this.components[key] = document.querySelectorAll(component);
    });    
  }

  // add general page methods here like event listeners, show and hide
}
