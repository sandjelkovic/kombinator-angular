import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SlotEntry} from "../../../../common/slot-entry.model";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
// import {MediaChange, ObservableMedia} from "@angular/flex-layout";


@Component({
  selector: 'app-slot-entries',
  templateUrl: './slot-entries.component.html',
  styleUrls: ['./slot-entries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SlotEntriesComponent implements OnInit {

  @Input() entries : Array<SlotEntry>;

  columnNum = 0;

  constructor(media: ObservableMedia)
  {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        // alert(change.mqAlias);
        console.log(change.mqAlias);
        if (change.mqAlias == 'xs') {
          this.columnNum = 1;
        }
        else if (change.mqAlias == 'sm') {
          this.columnNum = 2;
        }
        else {
          this.columnNum = 3;
        }
      });
  }

  ngOnInit() {
  }

}

