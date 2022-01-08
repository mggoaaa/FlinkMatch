import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public preferredGender: any;
  get_People: any;
  contact: any;
  constructor(private serviceUser: PeopleService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContact();
    this.router.params.subscribe(
      (params: Params) => {
        this.preferredGender = params['preferredGender'];
        //obtener el genero preferido.
        console.log(this.preferredGender);
      }
    );

  }

  getContact() {
    this.serviceUser.getPeople()
      .subscribe(people => {
        this.get_People = people.allWaifusAndHusbandos;
        this.contact = people.allWaifusAndHusbandos.filter((user: { gender: any; }) => user.gender === this.preferredGender);
        console.log(people.allWaifusAndHusbandos)
        console.log(this.contact);
      });

  }

}
