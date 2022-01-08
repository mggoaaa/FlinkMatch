import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: {
    email:           string,
    password:        string}= 
    { email:           "",
      password:        ""};
  preferredGender: any = [];

  constructor(private serviceUser: LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    this.serviceUser.login(this.userLogin).subscribe(
      data => {
        this.preferredGender = data.user.preferredGender;
        console.log(this.preferredGender);
        this.router.navigateByUrl(`/people/${this.preferredGender}`);
      }
      
    );
  }

}
