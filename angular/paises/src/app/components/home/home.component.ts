import { Component, OnInit } from '@angular/core';

import { Country } from '../../interface/country';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populatedCountries: Country[] = [];
  largestCountries: Country[] = [];
  gdpCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.setPopulatedCountries();
    this.setLargestCountries();
    this.setGDPCountries();
  }

  setPopulatedCountries(): void {
    this.populatedCountries = this.countryService.getPopulatedCountries();
  }
 
  setLargestCountries(): void {
    this.largestCountries = this.countryService.getLargestCountries();
  }
 
  setGDPCountries(): void {
    this.gdpCountries = this.countryService.getGDPCountries();
  }

}
