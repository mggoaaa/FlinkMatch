import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  get_People: any ;
  constructor(private serviceUser: PeopleService) { }

  ngOnInit(): void {
    this.obtenerPartes();
  }
  obtenerPartes(){
    this.serviceUser.getPeople()
      .subscribe(parte => {
        this.get_People = parte;
        console.log(parte)
      });

  }
  
}
