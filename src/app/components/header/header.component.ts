import { Component,Directive,ElementRef, OnInit } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import {MovieService} from '../../movie.service';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Directive({
  selector: '[SearchComponent]'
})

export class HeaderComponent implements OnInit {
  @Output() outData : string = 'Hello';

  userObject:any;
  userName:string = "Sairamreddy";
  constructor(private http:Http,private mve:MovieService ) {
    this.mve.currentMessage.subscribe(message => this.userObject  = message)
    console.log("this.userObject", this.userObject);
   }

  ngOnInit() {
   this.userName = this.userObject.UserName;
  }

  search(title:string){
    console.log('Title',title);
    console.log('Outdata',this.outData);
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
}
