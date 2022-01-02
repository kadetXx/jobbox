import { each } from "lodash";

export class Page {
  constructor({ components }: any) {
    this.create(components);
  }

  create(components) {
    // for each of the data type passed in, select all and then save it as an item in this.elements
    each(components, (component: any, key: any) => {
      console.log(component);
    });
  }

  // add general page methods here like event listeners, show and hide
}
