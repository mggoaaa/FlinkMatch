import { AbstractType, Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/interface/users/login.request';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: any = [];
  preferredGender: any = [];
  islogin: any;
  constructor(private serviceUser: LoginService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.userLogin = new login();
  }
  //send data to login
  login(form: NgForm) {
    this.serviceUser.login(this.userLogin).subscribe(
      data => {
        this.preferredGender = data.user.preferredGender;
        this.islogin = data.isLoggedIn;
        console.log(this.preferredGender);
        alert('usuario correcto');
        //send parameter to filter gender
        this.cookieService.set('islogin', this.islogin, 1, "/");
        this.router.navigate([`/people/${this.preferredGender}`]);
        //localStorage.setItem('usuario', JSON.stringify(this.islogin));
      }, (err) => {
        console.log(err)
        alert(err.error.message)
      }
    );
  }

}
