import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core/src/metadata/directives';
import { HttpModule } from '@angular/http/src/http_module';
// import * as axios from 'axios';
import { Http } from '@angular/http/src/http';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';
 import {MovieService} from '../../movie.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input('outData') incomingData : string;
  @Input('movieName') movieName : string;
  
  outData : string = "Home";
  text1:string;
  result: string[] = [];
  copy: string[] = [];

//public data: Observable<Array<number>>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;


  
  constructor(private http:Http,private mve:MovieService) { }

  ngOnInit() {
    // console.log('Value in child',this.incomingData);  
    // var x= (<HTMLInputElement>document.getElementById('sample')).value;
    // console.log('Vlaus X',x);

    

  }

  movieSelected(id){
    console.log('ID',id);

  }


  getMovie(){
    console.log('Subscribing');
    this.mve.getMovie().subscribe(

      data => {
        this.result.push(data);
        console.log('type',this.result);
      
      }
    )

  }




}
