import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
alrts;

  constructor(private route: ActivatedRoute, private userservice: UserService) {

    this.route.paramMap.subscribe(params => {
    userservice.getAlertsById(params.get('id'));
    });
}

  ngOnInit(){
  }

}