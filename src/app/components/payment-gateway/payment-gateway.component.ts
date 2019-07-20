import { Component, OnInit, Input, Injectable, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-payment',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})

@Injectable()
export class PaymentComponent implements OnInit {
  @Input() outData : boolean;
  @Output() getChange =  new EventEmitter<boolean>();

  constructor() {
    this.outData = false;
  }

  ConfirmPayment() {
    this.outData = true;
    console.log("outData", this.outData);
    this.getChange.emit(this.outData);
  }

  ngOnInit() {
  }

}
