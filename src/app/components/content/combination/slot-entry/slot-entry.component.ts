import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SlotEntry} from "../../../../common/slot-entry.model";
import {MatRadioChange} from "@angular/material";
import {log} from "util";

@Component({
  selector: 'app-slot-entry',
  templateUrl: './slot-entry.component.html',
  styleUrls: ['./slot-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SlotEntryComponent implements OnInit {

  @Input() entry : SlotEntry;

  constructor() { }

  ngOnInit() {
  }

  onChangeState(event: MatRadioChange) {
    // why isn't it called when another radio gets selected?
    this.entry.selected = event.source.checked;
  }

}
