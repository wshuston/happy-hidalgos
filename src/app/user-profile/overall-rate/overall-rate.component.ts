import { Component, OnInit } from '@angular/core';

export interface record {
  wins: number;
  losses: number;
  draws: number;
}

// The record will need to be tied to stored data.
const RECORD_DATA: record[] = [
  {wins: 3, losses: 2, draws: 0}
];

@Component({
  selector: 'app-overall-rate',
  templateUrl: './overall-rate.component.html',
  styleUrls: ['./overall-rate.component.css']
})
export class OverallRateComponent implements OnInit {

  // Later, change to a variable that will call a function to determine user's
  // win rate based on saved data.
  overallWinRate: number = 60.00 ;
  displayedColumns: string[] = ['wins', 'losses', 'draws'];
  dataSource = RECORD_DATA;

  constructor() { }

  ngOnInit() {
  }

}
