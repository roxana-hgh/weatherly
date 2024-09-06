import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { BaseComponent } from './components/base/base.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SelectLocationComponent } from './components/select-location/select-location.component';

const routes: Routes = [
  { path: '', redirectTo: '/select-location', pathMatch: 'full' },
  // { path: 'base', component: BaseComponent },
  { path: 'select-location', component: SelectLocationComponent },
  { path: 'weather/:location', component: WeatherDetailsComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
