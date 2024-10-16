import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from '../../services/weather-forcast.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrl: './select-location.component.scss'
})
export class SelectLocationComponent implements OnInit {

  locations :Location[] = [];
  locationForm:FormGroup = this.fb.group({
    location: ['', Validators.required],
  });
  location!: string 

  constructor(
    private weatherService: WeatherForcastService,
    private router: Router,
    private fb: FormBuilder,

  ) {}
  ngOnInit(): void {
    
  }

  gotoLocationDetails() {
    this.location =  this.locationForm.value.location;
    
    if (this.location) {
      this.router.navigate(['/weather', this.location]);
     
    }
  }


}
