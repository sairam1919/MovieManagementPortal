import { Component, EventEmitter, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import {ActivatedRoute, Router } from '@angular/router'; 
declare var $: any;

@Component({
    selector: 'seat-selection',
    templateUrl: './seat-selection.component.html',
    styleUrls: ['seat-selection.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SeatSelectionComponent implements OnInit, AfterViewInit {
    public myEvent: EventEmitter<void>;
    public updatetextarea: EventEmitter<void>;

    username: string = "";
    password: string = "";
    showModal = false;
    TicketData:any = {};
    allNameVals = []; 
    allNumberVals = [];
    allSeatsVals = [];
    Success = false;
    response: string = "";
    showTime: string = "";
    theaterName: string = "";
    showtimes =[{
        "showTime": "11:00 AM"
      },
      {
        "showTime": "2:00 PM"
      },
      {
        "showTime": "6:00 PM"
      },
      {
        "showTime": "9:00 PM"
      }
      ];

      theaterNames =[{
        "theaterName": "Prasadh Imax"
      },
      {
        "theaterName": "AMB"
      },
      {
        "theaterName": "PVR ICON"
      }
      ];

      movieName:string = "";
    public constructor(private mve: MovieService, private router: Router, private route: ActivatedRoute) {
        this.myEvent = new EventEmitter<void>();
        this.updatetextarea = new EventEmitter<void>();
    }

    ngOnInit() {
        this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.movieName = params['movieName'] ? params['movieName'] : "Avengers";
        console.log("MovieName", this.movieName);
      });
    }

    hide() {
        this.showModal = false;
    }

    confirmBooking() {
        this.showModal = true;
        console.log("showModal" , this.showModal);
    }

    onOutput() {
        console.log("Event Recived");
        this.showTime = this.theaterName + " " + " " + "23/7/2019" + this.showTime;
        this.TicketData = {"Name": this.allNameVals[0], "NumberOfSeats":this.allNumberVals[0], "SeatNumbers": this.allSeatsVals[0], "MovieName": this.movieName, "ShowTime": this.showTime};
        console.log("TicketData", this.TicketData);
        this.mve.getAllPosts(this.TicketData).subscribe(
            data => {
              console.log("data" +  data);
              this.response = "Your Booking Has Been Confirmed. You will Recive a Mail Shortly"
              this.showModal = false;
              this.Success = true;
            }
          )
    }

    close() {
        this.router.navigateByUrl('/home');
    }

    public ngAfterViewInit(): void {
        console.log("inside the ngAfterViewInit");

        let self = this;

        this.myEvent.emit();
        this.updatetextarea.emit();

        this.myEvent.subscribe(
            () => {
                console.log("inside the takedata function");
                if (($("#Username").val().length == 0) || ($("#Numseats").val().length == 0)) {
                    alert("Please Enter your Name and Number of Seats");
                } else {
                    $(".inputForm *").prop("disabled", true);
                    $(".seatStructure *").prop("disabled", false);
                }
            },

        );

        this.updatetextarea.subscribe(
            () => {
                if ($("input:checked").length == ($("#Numseats").val())) {
                    $(".seatStructure *").prop("disabled", true);

                    //Storing in Array
                    this.allNameVals.push($("#Username").val());
                    this.allNumberVals.push($("#Numseats").val());
                    this.allSeatsVals.push($('#seatsBlock :checked').val());
                    // $('#seatsBlock :checked').each( () => {
                    //     console.log("inside the function");
                    //     console.log("inside", $(this).val());
                    //     this.allSeatsVals.push($(this).val());
                    // });

                    //Displaying 
                    $('#nameDisplay').val(this.allNameVals);
                    $('#NumberDisplay').val(this.allNumberVals);
                    $('#seatsDisplay').val(this.allSeatsVals);
                } else {
                    alert("Please select " + ($("#Numseats").val()) + " seats")
                }
            },
            (err: Error) => console.error(err)
        );

        function myFunction() {
            alert($("input:checked").length);
        }

        $(":checkbox").click(function () {
            if ($("input:checked").length == ($("#Numseats").val())) {
                $(":checkbox").prop('disabled', true);
                $(':checked').prop('disabled', false);
            } else {
                $(":checkbox").prop('disabled', false);
            }
        });
    }

}

