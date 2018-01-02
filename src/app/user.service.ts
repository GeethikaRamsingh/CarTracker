import { Injectable } from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AlertsComponent } from "./alerts/alerts.component";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import 'rxjs/add/operator/filter';
import { Alert } from "selenium-webdriver";



@Injectable()
export class UserService {

  constructor(private http: Http) {
  }
  getAlerts(): Observable<any> {
    return this.http.get('/assets/alerts.json')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }
  getAlertSort(): Observable <any[]> {
    return this.http.get('/assets/readings.json')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }
  getAlertsByTime(): Observable<any[]> {
    return this.http.get('/assets/alerts.json')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  getVehicles(): Observable<any[]> {
    return this.http.get('/assets/vehicle.json')
      .map((response:any) => response.json())
      .catch(error => Observable.throw(error.statusText));
  }


  getAlertsById(vinId: number | string): Observable<any[]> {
    //let myParams = new URLSearchParams();
    //myParams.set('id', vinId);
    //let options = new RequestOptions({params : myParams});
    return this.http.get('/assets/alerts.json')
      .map((response:any) => response.find(alert => alert.vinId === +vinId))
      .catch(error => Observable.throw(error.statusText));
  }

}