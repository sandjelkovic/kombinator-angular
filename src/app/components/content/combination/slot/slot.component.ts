import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Slot} from "../../../../common/slot.model";

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SlotComponent implements OnInit {

  @Input() slot : Slot;

  slotEditingActive : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
