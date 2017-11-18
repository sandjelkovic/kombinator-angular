import {Component, Input, OnInit} from '@angular/core';
import {Combination} from "../../../common/combination.model";
import {Slot} from "../../../common/slot.model";
import {SlotEntry} from "../../../common/slot-entry.model";

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.css']
})
export class CombinationComponent implements OnInit {

  @Input() combination: Combination;
  public slots: Array<Slot>;

  constructor() {
  }

  ngOnInit() {
    // retrieve
    this.slots = this.mockedSlots()
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
