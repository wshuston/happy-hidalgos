import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddResultsComponent } from './user-profile/add-results/add-results.component';
import { ConstructedTableComponent } from './user-profile/constructed-table/constructed-table.component';
import { LimitedTableComponent } from './user-profile/limited-table/limited-table.component';
import { OverallRateComponent } from './user-profile/overall-rate/overall-rate.component';
import { OverallEarningsComponent } from './user-profile/overall-earnings/overall-earnings.component';
import { UserCardComponent } from './user-profile/user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    AddResultsComponent,
    ConstructedTableComponent,
    LimitedTableComponent,
    OverallRateComponent,
    OverallEarningsComponent,
    UserCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
