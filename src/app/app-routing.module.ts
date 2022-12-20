import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsInfoComponent } from './weather/SPA/details-info/details-info.component';
import { MainPageComponent } from './weather/SPA/main-page/main-page.component';

const routes: Routes = [
  { path: "", component: MainPageComponent},
  { path: ":id", component: DetailsInfoComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
