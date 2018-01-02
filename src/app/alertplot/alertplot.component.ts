import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import * as moment from 'moment';

@Component({
  selector: 'app-alertplot',
  templateUrl: './alertplot.component.html',
  styleUrls: ['./alertplot.component.css']
})
export class AlertplotComponent implements OnInit {
readings;
catname;
cal;
title;
  constructor(private userservice: UserService) {
   this.userservice.getAlertSort()
     .subscribe(
       readings => this.readings = readings,
       error => console.log(error));
  }

  ngOnInit() {
    
  }
   now = moment().unix();

  fun1(val) {
    this.catname = val;
  }
  fun2(valu) {
    this.cal = (valu * 60 * 60);
  }
  fun3(val1) {
    this.title = val1;
  }

}

