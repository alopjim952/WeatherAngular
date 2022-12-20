import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../interfaces/weather.interface';
import { HistorySearchComponent } from '../history-search/history-search.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor(private wtService : WeatherService) { }

  historyAdd! : HistorySearchComponent;

  searchSite(site : string) : void {
    this.wtService.searchSite(site);
    document.querySelector('input')!.value = '';
  }

}
