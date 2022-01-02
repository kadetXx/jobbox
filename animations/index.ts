interface AppInterface {
  currentpage: string;
  createPages(page: string): void;
  createPreloader(): void;
}

type Props = {
  page: string;
};

import { Home } from "./pages/home";

export class App implements AppInterface {
  currentpage: any;

  // constructor receiving props from react
  constructor({ page }: Props) {
    // call createPages method
    this.createPages(page);
  }

  createPreloader() {
      
  }

  createPages(page: string) {
    // save a list of all pages
    const pages = {
      home: new Home(),
    };

    // set current page to current page
    this.currentpage = pages[page]
    // initialize current page
    this.currentpage.create();
  }
}
