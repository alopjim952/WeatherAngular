import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather.interface';
import { Observable } from 'rxjs';
import { WeatherDetails } from '../interfaces/weatherDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient : HttpClient) {
    if(localStorage.getItem('historial')){
      this.busquedas = JSON.parse(localStorage.getItem('historial')!) || [];
    }
   }

  private apiKey : string = "0f47f0344e89e02ccbfa99a24b875d1e";

  site! : Weather;

  siteDetails! : WeatherDetails;

  busquedas : string[] = [];

  error : boolean = false;

  addSite(site : String) : Observable<Weather[]> {
    return this.httpClient.get<Weather[]>(`https://api.openweathermap.org/data/2.5/weather?q=${site}&appid=${this.apiKey}&lang=es`);
  }

  detailsSite(site : string) : Observable<WeatherDetails[]> {
    return this.httpClient.get<WeatherDetails[]>(`https://api.openweathermap.org/data/2.5/forecast?q=${site}&appid=${this.apiKey}&lang=es`);
  }

  searchSite(site : string) : void {
    this.addSite(site).subscribe((response : any) => {
      this.error = false;
      this.site = response;

      if(this.busquedas.length == 5 || this.busquedas.includes(this.site.name)){
        let index : number = this.busquedas.findIndex(bqd => bqd == this.site.name);
        this.busquedas.splice(index, 1);
        this.busquedas.unshift(this.site.name);
      } else if(this.busquedas.includes(this.site.name)){
        let index : number = this.busquedas.findIndex(bqd => bqd == this.site.name);
        this.busquedas.splice(index, 1);
        this.busquedas.unshift(this.site.name);
      } else {
        this.busquedas.unshift(this.site.name);
      }
      localStorage.setItem('historial', JSON.stringify(this.busquedas));
    }, (error : any) => {
      this.error = true;
      console.log(this.error)
    });   
  }

  searchSiteDetails(site : string) : void{
      this.detailsSite(site).subscribe((response : any) => {
        this.siteDetails = response;
      })
  }
}
