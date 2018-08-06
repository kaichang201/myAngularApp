import { Component, OnInit } from '@angular/core';
import { Deal } from '../deal';
import { DEALS } from '../mock-deals';

@Component({
  selector: 'app-smartsearch',
  templateUrl: './smartsearch.component.html',
  styleUrls: ['./smartsearch.component.css']
})
export class SmartsearchComponent implements OnInit {

  deals = DEALS;
  mySelectedDeal = '';

  constructor() { }

  ngOnInit() {
  }

  myValueFormatter(deal: any): string {
      return deal.toString();
  }

  myDealListFormatter(deal: any): string {
      return deal.toString();
    }
}
