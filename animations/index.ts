interface AppInterface {
  currentpage: any;
  preloader: any;
  createPages(page: string): void;
  createPreloader(): void;
}

type Props = {
  page: string;
};

import { Home } from "./pages/home";
import { Preloader } from "./components/preloader";

export class App implements AppInterface {
  currentpage: any;
  preloader: any;

  // constructor receiving props from react
  constructor({ page }: Props) {
    // call create preloader method
    this.createPreloader();
    // call createPages method
    this.createPages(page);
  }

  createPreloader() {
    this.preloader = new Preloader();
  }

  createPages(page: string) {
    // save a list of all pages
    const pages = {
      home: new Home(),
    };

    // set current page to current page
    this.currentpage = pages[page];
    // initialize current page
    this.currentpage.create();
  }
}
