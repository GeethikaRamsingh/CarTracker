import { EpocttotimePipe } from './epocttotime.pipe';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MomentModule } from 'angular2-moment';
import { AgmCoreModule } from '@agm/core';
// import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { UserService } from "./user.service";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { AlertsdispComponent } from './alertsdisp/alertsdisp.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { AlerttimeComponent } from './alertbytime/alertbytime.component';
import { AlertplotComponent } from './alertplot/alertplot.component';
import { LocmapsComponent  } from './locmaps/locmaps.component';





const appRoutes: Routes = [
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'alerts', component: AlertsdispComponent},
  {path: 'vehicles/:vehsid', component: AlertsComponent},
  {path: 'alertplot' , component: AlertplotComponent},
  {path: 'locmaps', component: LocmapsComponent},
  {path: 'alertbytime', component: AlerttimeComponent},
  //{path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    AlertsComponent,
    AlertsdispComponent,
    SearchFilterPipe,
    AlerttimeComponent,
    AlertplotComponent,
    LocmapsComponent,
    EpocttotimePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,    HttpModule,
    MomentModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_VPKW1Ay5i-nGgkwjKMfFU2DRETAa49c'
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}