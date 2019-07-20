import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/movie.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./animate-custom.css', './style.css']
})
export class LoginComponent implements OnInit {
  title : string;
  email : string;
  pwd : string;
  showError = false;
  response = "";
  username: string;
  signup = false;
  public userObject: any;

   setUserObject(value:any) {
    this.userObject = value
  }

   getUserObject() {
    return this.userObject;
  }
  
  constructor(private mve:MovieService, private router: Router) { 
       
  }

   validateUser() {
    this.mve.getuserDetails().subscribe(
      data => {
        data.recordset.forEach(element => {
          console.log("data" +  element.Email, element.Password.trim());
          if( element.Email.trim() === this.email && element.Password.trim() === this.pwd ) {
            this.userObject = element
            this.mve.getUserObject(this.userObject);
            this.router.navigateByUrl('/home');
          } else {
            this.response ="Invalid UserName or Password";
             this.showError = true;
          }
        });
      },
      err => {
        this.response = err;
        this.showError = true;
        console.log("err" + err);
      }
    )
   }

   userSignUp() {
     this.signup = true;
     let body = {"UserName": this.username, "Email": this.email, "Password": this.pwd, "Bookings":'{"Movie": "", "Parking": ""}'};
     console.log("Body" + body); 
     this.mve.adduserDetails(body).subscribe(
      data => {
        console.log("data" + data)
       if(data) {
        this.response ="Registerd Successfully";
        this.showError = true;
       } else {
         this.response ="Unabel to Register the User. Please Try Again.";
          this.showError = true;
       }
      },
      err => {
        this.response = err;
        this.showError = true;
        console.log("err" + err);
      }
    )
   }

   ToLogin() {
     this.showError = false;
   }

  ngOnInit() {
  }

}
