import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './SPA/main-page/main-page.component';
import { SearchComponent } from './SPA/search/search.component';
import { ResultsComponent } from './SPA/results/results.component';
import { DetailsInfoComponent } from './SPA/details-info/details-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HistorySearchComponent } from './SPA/history-search/history-search.component';



@NgModule({
  declarations: [
    MainPageComponent,
    SearchComponent,
    ResultsComponent,
    DetailsInfoComponent,
    HistorySearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    MainPageComponent,
    DetailsInfoComponent
  ]
})
export class WeatherModule { }
