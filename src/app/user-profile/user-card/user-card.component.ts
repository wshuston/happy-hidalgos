import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  userName: string = "MTGJohnny"; // default for testing. Will need to be tied to login

  constructor() { }

  ngOnInit() {
  }

}
