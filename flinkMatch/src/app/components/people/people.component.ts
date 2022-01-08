import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public preferredGender: any;
  get_People: any;
  contact: any;
  contador = 0;
  mostrar = true;

  constructor(private serviceUser: PeopleService, private router: ActivatedRoute,private routers: Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.getContacts();
    // gets the preferredGender params
    this.router.params.subscribe(
      (params: Params) => {
        this.preferredGender = params['preferredGender'];
        console.log(this.preferredGender);
      }
    );

  }
//get all contacts and then filters by gender
  getContacts() {
    this.serviceUser.getPeople()
      .subscribe(people => {
        this.get_People = people.allWaifusAndHusbandos;
        this.contact = people.allWaifusAndHusbandos.filter((user: { gender: any; }) => user.gender === this.preferredGender);
        console.log(people.allWaifusAndHusbandos)
        console.log(this.contact);
      });

  }
  // these methods help to show the individual cards 
  like() {
    this.contador = this.contador + 1;
    if (this.contador > this.contact.length) {
      alert("Ya no hay contactos");
    }
  }
  dislike() {
    this.contador = this.contador + 1;
    if (this.contador > this.contact.length) {
      alert("Ya no hay contactos");
    }

  }
  // salir
  salir(){
    //localStorage.removeItem('usuario');
    this.cookieService.delete('islogin');
    this.routers.navigate([`/login`]);
    window.location.reload();

  }

}
