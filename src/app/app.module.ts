import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ParkingComponent } from './components/parking/parking.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { PaymentComponent } from './components/payment-gateway/payment-gateway.component';
import { TAB_COMPONENTS } from './components/Tabs/Tabset';

import {MovieService} from './movie.service';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MallComponent } from './components/Mall/Mall.component';
import { TheamParkComponent } from './components/TheamPark/TheamPark.component';
import { SportsComponent } from './components/Sports/Sports.component';

const appRoutes : Routes = [
  {
    path : 'home',
    component : HomePageComponent
  },
  
  {
    path : 'search',
    component : SearchComponent
  },

  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'park',
    component : ParkingComponent
  },
  {
    path : 'aboutus',
    component : AboutComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },{
    path : 'seatSelection',
    component : SeatSelectionComponent
  },{
    path : 'seatSelection/:movieName',
    component : SeatSelectionComponent
  }
  ,{
    path : 'paymentGateway',
    component : PaymentComponent
  }
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    HomePageComponent,
    ParkingComponent,
    SearchComponent,
    HeaderComponent,
    AboutComponent,
    AboutComponent,
    ContactComponent,
    SeatSelectionComponent,
    PaymentComponent,
    TAB_COMPONENTS,
    MallComponent,
    TheamParkComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AngularDateTimePickerModule, 
    RouterModule.forRoot(appRoutes)
   ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
