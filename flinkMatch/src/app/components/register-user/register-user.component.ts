import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/interface/users/users.response';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  usr_Registrate: {
    email:           string,
    name:            string,
    lastName:        string,
    password:        string,
    preferredGender: string,
    gender:          string,
    age:             string}= 
    { email:           "",
      name:            "",
      lastName:        "",
      password:        "",
      preferredGender: "",
      gender:          "",
      age:             ""};
  constructor(private serviceUser: LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  newUser(form: NgForm) {
    this.serviceUser.newUser(this.usr_Registrate).subscribe(
      res => {
        this.router.navigateByUrl('/');
        console.log(res);
      }
    );
  }
}
