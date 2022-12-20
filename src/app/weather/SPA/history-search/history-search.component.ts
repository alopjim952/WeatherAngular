import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-history-search',
  templateUrl: './history-search.component.html'
})
export class HistorySearchComponent{

  constructor(private wtService : WeatherService) { }

  get listSites(){
    return this.wtService.busquedas;
  }

  searchSite(site : string){
    this.wtService.searchSite(site);
  }

}
