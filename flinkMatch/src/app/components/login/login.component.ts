import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {login} from 'src/app/interface/users/login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: any = [];/*{
    email:           string,
    password:        string}= 
    { email:           "",
      password:        ""};*/
  preferredGender: any = [];

  constructor(private serviceUser: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.userLogin = new login();
  }
  //send data to login
  login(form: NgForm) {
    this.serviceUser.login(this.userLogin).subscribe(
      data => {
        this.preferredGender = data.user.preferredGender;
        console.log(this.preferredGender);
        alert('usuario correcto');
        //send parameter to filter gender
        this.router.navigateByUrl(`/people/${this.preferredGender}`);
      }, (err) => {
        console.log(err)
        alert(err.error.message)
      }
    );
  }

}
