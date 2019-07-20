import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Http } from '@angular/http/src/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title: string[] = [];
  movielist: string[] = ["Race", "Avengers"];
  constructor(private http: Http, private mve: MovieService, private router: Router) {
    for (let i in this.movielist) {
      console.log("i", this.movielist[i]);
      this.getResults(this.movielist[i]);
    }
  }

  ngOnInit() {
  }

  getResults(value) {

    console.log('homepage value', value);

    this.mve.getResults(value).subscribe(

      data => {
        this.title.push(data);
        console.log('type', this.title);

      }
    )
  }

  movieNavigate(movieName: any) {
    console.log("movieNavigate", movieName);
    this.router.navigate(["/seatSelection"], { queryParams: { movieName: movieName } });
  }

}
