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
  { format: 'Standard', winrate: 52.14, earnings: 25.25 }
  { format: 'Modern', winrate: 51.01, earnings: 6.66 },
  { format: 'Legacy', winrate: 38.40, earnings: -1254.31 },
  { format: 'Vintage', winrate: 10.25, earnings: -4000.25 },
  { format: 'Pauper', winrate: 63.00, earnings: 666.66 }
];

@Component({
  selector: 'app-constructed-table',
  templateUrl: './constructed-table.component.html',
  styleUrls: ['./constructed-table.component.css']
})
export class ConstructedTableComponent implements OnInit {

  displayedColumns: string[] = ['format', 'winrate', 'earnings'];
  dataSource = FORMAT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
