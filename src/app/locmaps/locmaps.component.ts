import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import * as moment from 'moment';

@Component({
  selector: 'app-locmaps',
  templateUrl: './locmaps.component.html',
  styleUrls: ['./locmaps.component.css']
})
export class LocmapsComponent implements OnInit {
readings;
  constructor(private userservice: UserService ) {
    this.userservice.getAlertSort()
     .subscribe(
       readings => this.readings = readings,
       error => console.log(error)
     );
  }
ngOnInit() {

}
  now = moment().unix();
  date = new Date(this.now * 1000);
}