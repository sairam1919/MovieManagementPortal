import { Component, OnInit, EventEmitter, Injectable, AfterViewInit } from '@angular/core';
import { MovieService } from '../../movie.service';
declare var $: any;

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})

@Injectable()
export class ParkingComponent implements OnInit, AfterViewInit {

  
  public myEvent: EventEmitter<void>;

  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy',
    defaultOpen: true
  }

  parkingData = [{
    "Mall": "PrasadImax",
    "Image": ""
  },
  {
    "Mall": "PVR Hitech",
    "Image": ""
  },
  {
    "Mall": "AMB Gachibowli",
    "Image": ""
  }
  ];
  showType = false;

  MallName: string = "";
  Type: string = "";

  response: String = "";
  ParkingType = [{ "type": "Bike" }, { "type": "Car" }];

  showConfirm = false;
  confirmed = false;
  selectedDate: any;
  showDatePicker = false;
  showPayment = false;
  userObject:any;

  constructor(private mve: MovieService) {
    this.myEvent = new EventEmitter<void>();
    this.mve.currentMessage.subscribe(message => this.userObject  = message);
  }

  selectMall() {
    console.log("MallName", this.MallName);
    this.showType = true;
  }

  selectType() {
    console.log("Type", this.Type);
    this.showDatePicker = true;
  }

  DateTime() {
    console.log("selectedDate" + this.selectedDate);
    if (this.selectedDate) {
      this.showConfirm = true;
    }
  }

  selectConfirm() {
    console.log("Selection Confirmed", this.Type);
    this.confirmed = true;
    this.MallName = "";
    this.Type = "";
    this.selectedDate = "";
    this.myEvent.emit();
  }

  onOutput() {
    console.log("inside the onOutput");
      this.showConfirm = false;
      this.showPayment = false;
      this.showType = false;
      this.showDatePicker = false;
      this.response = "Your " + this.Type + " Parking is Conformed for " + this.MallName + ".";
      let obj = {"Sub":this.response, "Name":this.userObject.Email, "Type": this.Type, "MallName": this.MallName};
      this.mve.postParking(obj).subscribe(
        data => {
          console.log("data" +  data);
          this.selectConfirm();
        }
      )
  }

  ngOnInit() {
  }

// When the user clicks the button, open the modal 
buttonClick() {
  this.showPayment = true;
}

  public ngAfterViewInit(): void {

    this.myEvent.subscribe(
      () => (window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
          $(this).remove();
        });
      }, 8000))
    )
  }

}
