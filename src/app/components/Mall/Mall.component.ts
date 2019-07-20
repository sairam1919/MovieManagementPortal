import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { MovieService } from 'app/movie.service';


@Component({
    selector: 'app-mall',
    templateUrl: './Mall.component.html',
    styleUrls: ['./Mall.component.css']
})
export class MallComponent implements OnInit {

    constructor(private mve:MovieService, private router: Router) { }

    MallList = [
        {
            "img": "https://media-cdn.tripadvisor.com/media/photo-i/14/49/b2/e4/transform-your-shopping.jpg",
            "mallName": "The Forum Sujana Mall"
        },
        {
            "img": "https://media-cdn.tripadvisor.com/media/photo-i/06/03/f4/9c/inorbit-entrance.jpg",
            "mallName": "Inorbit Mall"
        },
        {
            "img": "https://media-cdn.tripadvisor.com/media/photo-i/0d/78/b5/3a/the-mall-building.jpg",
            "mallName": "GVK One Mall"
        },
        {
            "img": "https://media-cdn.tripadvisor.com/media/photo-i/0e/96/18/4e/photo0jpg.jpg",
            "mallName": "Manjeera Trinity Mall"
        },
        {
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/09/42/51/6e/city-centre-mall.jpg",
            "mallName": "City Centre Mall"
        },
        {
            "img": "https://media-cdn.tripadvisor.com/media/photo-i/0e/86/b0/35/entrance.jpg",
            "mallName": "Cinepolis Mantra Mall"
        },
        {
            "img": "https://media-cdn.tripadvisor.com/media/photo-i/13/34/95/4f/next-galleria-mall.jpg",
            "mallName": "Next Galleria"
        }
    ]

    MovieList = [
        {
            "img": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1556641392/amc-cdn/production/2/movies/52700/52667/PosterDynamic/76007.jpg",
            "movieName": "Spider-Man: Far From Home"
        },
        {
            "img": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1555611325/amc-cdn/production/2/movies/43000/43026/PosterDynamic/75550.jpg",
            "movieName": "Toy Story 4"
        },
        {
            "img": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1560887222/amc-cdn/production/2/movies/59400/59365/PosterDynamic/78382.jpg",
            "movieName": "Crawl"
        },
        {
            "img": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1551722067/amc-cdn/production/2/movies/53700/53728/PosterDynamic/74260.jpg",
            "movieName": "The Lion King"
        },
        {
            "img": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1557572673/amc-cdn/production/2/movies/55200/55190/Poster/270709R1.jpg",
            "movieName": "Fast & Furious Presents: Hobbs & Shaw"
        }
    ]

    hotelList = [
        {
            "name": "Burger King",
            "img": "../../../assets/images/BurgerKing.png",
            "url":"https://www.bk.com/"
        },
        {
            "name": "KFC",
            "img": "../../../assets/images/KFC.png",
            "url":"https://online.kfc.co.in/home?gclid=CjwKCAjw98rpBRAuEiwALmo-ysNqIHGs6ye1-kdQdN38NFoCGas1Ecttd6IG40KGbFHYS3pMN4SAEBoCRWkQAvD_BwE"
        },
        {
            "name": "AB's - Absolute Barbecues",
            "img": "../../../assets/images/AB.png",
            "url":"https://www.zomato.com/hyderabad/abs-absolute-barbecues-gachibowli"
        }
    ]

    sportsList = [
        {
            "name": "SMAAASH",
            "img": "../../../assets//images/smaaash.jpg",
            "url":"https://smaaash.in/"
        },
        {
            "name": "AREA51",
            "img": "../../../assets//images/area51.jpg",
            "url":"http://area51.in/"
        }
    ]

    MallNamesList = true;
    mallActivites = false;
    mallMovie = false;
    mallFood = false;
    mallSports = false;
    hotelObj:string = "";
    sportObj:string = "";

    ngOnInit() {
    }

    goToMallActivities() {
        this.MallNamesList = false;
        this.mallActivites = true;
        this.mallMovie = true;
    }
    goToActivitiesInMallMovies() {
        this.mallMovie = true;
        this.mallFood = false;
        this.mallSports = false;
    }

    goToActivitiesInMallFood() {
        this.mallMovie = false;
        this.mallFood = true;
        this.mallSports = false;
    }
    goToActivitiesInMallGames() {
        this.mallFood = false;
        this.mallSports = true;
        this.mallMovie = false;
    }

    bookMovie(movieName: any) {
        console.log("movieNavigate", movieName);
        this.router.navigate(["/seatSelection"], { queryParams: { movieName: movieName } });
    }

    bookTable(url: any) {
        window.open(url);
    }
    
    bookGame(url: any) {
        window.open(url);
    }
}
