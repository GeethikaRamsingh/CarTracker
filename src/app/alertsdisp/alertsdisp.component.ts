import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-alertsdisp',
  templateUrl: './alertsdisp.component.html',
  styleUrls: ['./alertsdisp.component.css']
})
export class AlertsdispComponent implements OnInit{
alerts;
sel;
  constructor(private userservice: UserService) {
    this.userservice.getAlerts()
      .subscribe(
        alerts => this.alerts = alerts,
        error => console.log(error)
      );
  }
  ngOnInit() {
    
  }
  sort(val) {
    this.sel = val;

  }
}
