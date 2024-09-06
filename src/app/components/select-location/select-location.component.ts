import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from '../../services/weather-forcast.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrl: './select-location.component.scss'
})
export class SelectLocationComponent implements OnInit {
  location!: string;


  constructor(
    private weatherService: WeatherForcastService,
    private router: Router

  ) {}
  ngOnInit(): void {}

  gotoLocationDetails() {
    if (this.location) {
      this.router.navigate(['/weather', this.location]);
     
    }
  }


}
