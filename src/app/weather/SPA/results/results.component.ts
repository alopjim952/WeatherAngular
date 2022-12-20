import { Component } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';
import { SearchComponent } from '../search/search.component';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  constructor(private wtService : WeatherService) { }

  get siteC(){
    return this.wtService.site;
  }

  date() : Date {
    let date : Date = new Date();
    return date;
  }

  celcius(temp : Number | any) : string {
    let gradosCelsius : Number = (temp - 273);
    let gradosRes = gradosCelsius.toFixed(2);
    return gradosRes;
  }

  searchSite(site : string) : void {
    this.wtService.searchSiteDetails(site);
  }

  get error(){
    return this.wtService.error;
  }


}
