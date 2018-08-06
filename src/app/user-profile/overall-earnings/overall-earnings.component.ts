import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-earnings',
  templateUrl: './overall-earnings.component.html',
  styleUrls: ['./overall-earnings.component.css']
})
export class OverallEarningsComponent implements OnInit {

  totalEarnings: number = 51.50;
  constructor() { }

  ngOnInit() {
  }

}
