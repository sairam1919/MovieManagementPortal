import { Injectable } from '@angular/core';
import {Http, Response,RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx' ;
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class MovieService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http:Http) {   }

  getMovie(){
    // return this.http.get('http://www.omdbapi.com?s='+movieName)
    console.log('In service');
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=c6be332b')
    .map(res=> res.json() )
  }

  getResults(title){
    console.log('getResults');
    return this.http.get('http://www.omdbapi.com/?t='+title+'&apikey=c6be332b')
    .map(res=> res.json() )

  }

  getAllPosts(body: any) {
    return this.http.post('/api/sendEmail', body)
      .map(res => res.text());
  }

  postParking(body: any) {
    return this.http.post('/api/sendParkingEmail', body)
      .map(res => res.text());
  }
  
  getuserDetails() {
    console.log("Inside the  getuserDetails")
    return this.http.get('/api/user')
      .map(res => res.json());
  }

  adduserDetails(body: any) {
    return this.http.post('/api/user', body)
      .map(res => res.json());
  }

  updateuserDetails(body: any) {
    return this.http.put('/api/user', body)
      .map(res => res.json());
  }

  deleteuserDetails() {
    return this.http.delete('/api/user')
      .map(res => res.json());
  }


  getUserObject(message:any) {
    this.messageSource.next(message)
  }


}
