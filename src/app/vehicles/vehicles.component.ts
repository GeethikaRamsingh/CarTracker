import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
veh;
  constructor( private userservice: UserService) {
    userservice.getVehicles()
      .subscribe(
        veh => this.veh = veh,
        error => console.log(error)
      )
  }
}
