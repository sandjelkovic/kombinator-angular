import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Slot } from "../../../common/slot.model";
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { CombinationService } from '../../../services/combination.service';
import { Combination } from '../../../common/combination.model';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.css']
})
export class CombinationComponent implements OnInit, OnDestroy {

  @Input() combination: Combination = new Combination("mocked UUID", "Mocked combination");
  public slots: Array<Slot> = [];
  private sub: any;

  constructor(private route: ActivatedRoute, private combinationService: CombinationService) {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  // TODO split this param handling into a separate, router aware component and use it to call this component
  ngOnInit() {
    this.sub = this.route.paramMap
      .filter((map: ParamMap, index: number) => map.has("combinationUUID"))
      .map((map: ParamMap) => map.get("combinationUUID"))
      .map((uuid: string) => this.combinationService.getSlots(uuid))
      // Thanks RX... For no collect operator. Mutability all the way
      .subscribe((slotsArray) => {
        this.slots = slotsArray
      })
  }

}
