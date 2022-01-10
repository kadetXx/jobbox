import { Animation } from "./animation";

export class Parallax extends Animation {
  mapped: number;
  params: {
    displacement: number;
  };

  constructor({ element, elements, params }) {
    super({ element, elements });

    this.params = params;
    this.mapDistanceToAnimation();
  }

  async mapDistanceToAnimation() {
    this.mapped = this.params.displacement / this.rect.targetDistanceY;
    this.init && this.init();
  }

  init(): void {}
}
