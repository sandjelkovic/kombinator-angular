import {Component, Input, OnInit} from '@angular/core';
import {Combination} from "../../../common/combination.model";

@Component({
  selector: 'app-combination-item',
  templateUrl: './combination-item.component.html',
  styleUrls: ['./combination-item.component.css']
})
export class CombinationItemComponent implements OnInit {

  @Input() combination: Combination;

  constructor() { }

  ngOnInit() {
  }

}
