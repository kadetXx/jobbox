interface AppInterface {
  currentpage: any;
  preloader: any;
  pages: any;
  pagetitle: string;
  createPages(page: string): void;
  createPreloader(): void;
}

type Props = {
  page: string;
  ismobile: boolean;
};

import { Home } from "./pages/home";
import { Preloader } from "./components/preloader";

export class App implements AppInterface {
  currentpage: any;
  preloader: any;
  pages: any;
  pagetitle: string;
  frame: any;

  // constructor receiving props from react
  constructor({ page, ismobile }: Props) {
    globalThis.ismobile = ismobile;

    // set current page name
    this.pagetitle = page;
    // call create preloader method
    this.createPreloader();
    // call createPages method
    this.createPages(page);
  }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once("start-pre-anim", this.onPreloaded.bind(this));
  }

  createPages(page: string) {
    // save a list of all pages
    this.pages = this.pages || {
      home: new Home(),
    };

    // set current page to current page
    this.currentpage = this.pages[this.pagetitle];
    // initialize current page
    this.currentpage.create();
    this.currentpage.once("kill-preloader", this.finishLoad.bind(this));
  }

  onPreloaded() {
    this.currentpage.startPreAnimation && this.currentpage.startPreAnimation();
  }

  finishLoad() {
    this.preloader.kill();
    this.currentpage.onResize();
    this.currentpage.addEventListeners();
  }
}
