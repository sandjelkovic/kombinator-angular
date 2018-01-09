import {Component, Input, OnInit} from '@angular/core';
import {Slot} from "../../../../common/slot.model";

@Component({
  selector: 'app-slot-list',
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.css']
})
export class SlotListComponent implements OnInit {
  @Input() public slots: Array<Slot>;

  constructor() {
  }

  ngOnInit() {
  }

}
