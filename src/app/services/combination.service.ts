import {Injectable} from '@angular/core';
import {Combination} from "../common/combination.model";
import { Slot } from '../common/slot.model';
import { SlotEntry } from '../common/slot-entry.model';

@Injectable()
export class CombinationService {

  constructor() {
  }

  getCombinations(): Array<Combination> {
    return [
      new Combination("1", "First Combination"),
      new Combination("2", "Second Super Awesome Combination"),
      new Combination("3-4dsf-123dsa", "New computer")
    ]
  }

  getSlots(combinationUUID: string) : Array<Slot> {
    return this.mockedSlots()
  }
  private mockedSlots() {
    return Array<Slot>(
      new Slot("CPU", "0", [
        new SlotEntry("Intel i5"),
        new SlotEntry("AMD Ryzen 7")
      ]),
      new Slot("Motherboard", "154"),
      new Slot("GPU", "0", [
        new SlotEntry("nVidia GTX 1060"),
        new SlotEntry("AMD Radeon 380"),
        new SlotEntry("nVidia GTX 1060", "", "", "", true)
      ]),
      new Slot("", "")
    );
  }
}
