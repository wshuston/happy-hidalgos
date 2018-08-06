import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Format {
  value: string;
  viewValue: string;
}

export interface  Tournament {
  name: string;
  viewName: string;
  fee: number;
}

@Component({
  selector: 'app-add-results',
  templateUrl: './add-results.component.html',
  styleUrls: ['./add-results.component.css']
})

export class AddResultsComponent implements OnInit {

  isLinear = false;
  formatGroup: FormGroup;
  tournamentGroup: FormGroup;
  deckGroup: FormGroup;
  resultGroup: FormGroup;
  post: any; // A property for the submitted form. Used later with the backend.

  formats: Format[] = [
    {value: 'Constructed', viewValue: 'Constructed'},
    {value: 'Limited', viewValue: 'Limited'}
  ];

  constructed: Format[] = [
    {value: 'Standard', viewValue: 'Standard'},
    {value: 'Modern', viewValue: 'Modern'},
    {value: 'Legacy', viewValue: 'Legacy'},
    {value: 'Vintage', viewValue: 'Vintage'},
    {value: 'Pauper', viewValue: 'Pauper'}
  ]

  limited: Format[] = [
    {value: 'Draft', viewValue: 'Draft'},
    {value: 'Sealed', viewValue: 'Sealed'}
  ]

  contructedTournament: Tournament[] = [
    {name: 'Friendly', viewName: 'Friendly', fee: 8},
    {name: 'Competitive', viewName: 'Competitive', fee: 12},
  ]

  draftTournament: Tournament[] = [
    {name: 'Friendly', viewName: 'Friendly', fee: 12},
    {name: 'Intermediate', viewName: 'Intermediate', fee: 12},
    {name: 'Competitive', viewName: 'Competitive', fee: 15}
  ]

  sealedTournament: Tournament[] = [
    {name: 'Friendly', viewName: 'Friendly', fee: 24},
    {name: 'Competitive', viewName: 'Competitive', fee: 24}
  ]


  constructor(private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formatGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.tournamentGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.deckGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.resultGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
}
