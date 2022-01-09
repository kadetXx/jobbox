interface Brand {
  name: string;
  image: string;
  width: number;
  height: number;
}

import { media } from "./media.mock";
const {
  landing: {
    hero: { brands: images },
  },
} = media;

export const brands: Brand[] = [
  {
    name: "cowrywise",
    image: images.cowrywise,
    width: 219,
    height: 41,
  },

  {
    name: "paystack",
    image: images.paystack,
    width: 42,
    height: 41,
  },

  {
    name: "paypal",
    image: images.paypal,
    width: 167,
    height: 94,
  },

  {
    name: "zenith",
    image: images.zenith,
    width: 28,
    height: 40,
  },

  {
    name: "kuda",
    image: images.kuda,
    width: 171,
    height: 40,
  },

  {
    name: "gtbank",
    image: images.gt,
    width: 59,
    height: 40,
  },
];
