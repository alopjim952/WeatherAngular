import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { List, WeatherDetails } from '../../interfaces/weatherDetails.interface';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html'
})
export class DetailsInfoComponent implements OnInit {

  constructor(private wtService : WeatherService, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({id}) => {
      this.wtService.searchSiteDetails(id);
      this.detailsSite = this.wtService.siteDetails;
      this.days();
    })
  }

  detailsSite! : WeatherDetails;

  celcius(temp : Number | any) : string {
    let gradosCelsius : Number = (temp - 273);
    let gradosRes = gradosCelsius.toFixed(2);
    return gradosRes;
  }

  day1 : any;
  hourAfterDay1 : any;
  day2 : any;
  day3 : any;
  day4 : any;
  day5 : any;

  days() : void{
    let indice1 = this.detailsSite.list.findIndex((l) => l.dt_txt.toString().substring(11,13) == "00");
    this.day1 = this.detailsSite.list.slice(0,(indice1 == 0)? 1:indice1);
    let indice2 = this.detailsSite.list.findIndex((l, i) => l.dt_txt.toString().substring(11,13) == '00' && i > indice1);
    this.day2 = this.detailsSite.list.slice((indice1 == 0)? 1:indice1,indice2);
    let indice3 = this.detailsSite.list.findIndex((l, i) => l.dt_txt.toString().substring(11,13) == '00' && i > indice2);
    this.day3 = this.detailsSite.list.slice(indice2,indice3);
    let indice4 = this.detailsSite.list.findIndex((l, i) => l.dt_txt.toString().substring(11,13) == '00' && i > indice3);
    this.day4 = this.detailsSite.list.slice(indice3,indice4);
    let indice5 = this.detailsSite.list.findIndex((l, i) => l.dt_txt.toString().substring(11,13) == '00' && i > indice4);
    this.day5 = this.detailsSite.list.slice(indice4,indice5);
  }

}
