import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { MovieService } from 'app/movie.service';


@Component({
    selector: 'app-theampark',
    templateUrl: './TheamPark.component.html',
    styleUrls: ['./TheamPark.component.css']
})
export class TheamParkComponent implements OnInit {

    constructor(private mve:MovieService, private router: Router) { }

    hotelList = [
        {
            "name": "Wonderla",
            "img": "../../../assets/images/wonderla.png",
            "url":"https://www.wonderla.com/hyderabad-park/"
        },
        {
            "name": "Wild Waters",
            "img": "../../../assets/images/wildwaters.jpg",
            "url":"https://wildwaters.in/"
        },
        {
            "name": "Ramoji Film City",
            "img": "../../../assets/images/ramojifilmcity.jpg",
            "url":"https://www.ramojifilmcity.com/"
        }
    ]

    ngOnInit() {
    }

    book(url: any) {
        window.open(url);
    }
}
