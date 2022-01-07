import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Datauser } from 'src/app/interface/users/u.model';
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

  constructor(private serviceUser: LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    this.serviceUser.login(this.userLogin).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/people');
      }
      
    );
  }

}
