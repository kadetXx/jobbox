interface NavLink {
  title: string;
  url: string;
  blank: boolean;
}

const frontLinks: NavLink[] = [
  {
    title: "Find Jobs",
    url: "/",
    blank: false,
  },
  {
    title: "Talent",
    url: "/",
    blank: false,
  },
  {
    title: "Build your CV",
    url: "/",
    blank: false,
  },
  {
    title: "Pricing",
    url: "/",
    blank: false,
  },
];

export const navLinks = {
  frontLinks,
};
