import {Injectable} from '@angular/core';
import {Combination} from "../common/combination.model";

@Injectable()
export class CombinationService {

  constructor() {
  }

  getCombinations(): Array<Combination> {
    return [
      new Combination(1, "First Combination"),
      new Combination(2, "Second Super Awesome Combination")
    ]
  }

}
