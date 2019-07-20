import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'app/movie.service';

@Component({
    selector: 'app-sports',
    templateUrl: './Sports.component.html',
    styleUrls: ['./Sports.component.css']
})
export class SportsComponent implements OnInit {

    constructor(private mve: MovieService, private router: Router) { }

    sportsList = [
        {
            "name": "Arena 48",
            "img": "../../../assets/images/Arena.jpg",
            "url": "http://arena48.com/"
        },
        {
            "name": "Phoenix Arene",
            "img": "../../../assets/images/phoenixArean.png",
            "url": "http://phoenixarena.com/"
        }
    ]

    ngOnInit() {
    }

    book(url: any) {
        window.open(url);
    }
}
