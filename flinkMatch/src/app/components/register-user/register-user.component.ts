import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { user } from 'src/app/interface/users/users.request';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  usr_Registrate: any = [];
  constructor(private serviceUser: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.usr_Registrate = new user();
  }
  //Add user
  newUser(form: NgForm) {
    this.serviceUser.newUser(this.usr_Registrate).subscribe(
      res => {
        //return home
        this.usr_Registrate = res;
        alert("User registrado");
        this.router.navigateByUrl('/');
        console.log(res);
      },(err) => {
        console.log(err)
        alert('user ya registrado, intenta con otro correo');
      }
    );
  }
}
