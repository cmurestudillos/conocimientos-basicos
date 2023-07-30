import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from './service/country.service';
import { HomeComponent } from '../app/components/home/home.component';
import { AllCountriesComponent } from '../app/components/all-countries/all-countries.component';
import { CountryDetailComponent } from '../app/components/country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
