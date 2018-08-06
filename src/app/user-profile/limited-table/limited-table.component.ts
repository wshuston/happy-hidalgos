import { Component, OnInit } from '@angular/core';

export interface FormatRates {
  format: string;
  winrate: number;
  earnings: number;
}

// Sample profile resuslts. This information will later read from the user's stored data
// and will update winrate and earnings accordingly. Winrate and Earning will need to be
// changed to a variable later.
const FORMAT_DATA : FormatRates[] = [
  { format: 'Draft', winrate: 54.98, earnings: 124.42 }
  { format: 'Sealed', winrate: 52.45, earnings: 68.74 },
];

@Component({
  selector: 'app-limited-table',
  templateUrl: './limited-table.component.html',
  styleUrls: ['./limited-table.component.css']
})
export class LimitedTableComponent implements OnInit {

  displayedColumns: string[] = ['format', 'winrate', 'earnings'];
  dataSource = FORMAT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
