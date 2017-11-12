import {Component, OnInit} from '@angular/core';
import {CombinationService} from "../../../services/combination.service";
import {Combination} from "../../../common/combination.model";

@Component({
  selector: 'app-combination-list',
  templateUrl: './combination-list.component.html',
  styleUrls: ['./combination-list.component.css']
})
export class CombinationListComponent implements OnInit {

  private combinations: Array<Combination>;

  constructor(private combinationService: CombinationService) {
  }

  ngOnInit() {
    this.combinations = this.combinationService.getCombinations()
  }

}
