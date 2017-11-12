import {SlotEntry} from "./slot-entry.model";

export class Slot {
  constructor(public name: string,
              public value: string = "",
              public entries: Array<SlotEntry> = []
  ) {}

  selectedEntry() : SlotEntry {
    return this.entries.find( (entry) => entry.selected)
  }
}
