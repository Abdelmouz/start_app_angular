import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/app.about';
import { FqaComponent } from './fqa/fqa.component';
import { NewsComponent } from './news/news.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionComponent } from './prevention/prevention.component';
import { TransmisionComponent } from './transmision/transmision.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "fqa", component: FqaComponent },
  { path: "news", component: NewsComponent },
  { path: "symptoms", component: SymptomsComponent },
  { path: "prevention", component: PreventionComponent },
  { path: "transmision", component: TransmisionComponent },
  { path: "treatment", component: TreatmentComponent },
  { path: "notfound", component: ErrorComponent },
  { path: "**", component: ErrorComponent },
  { path: "##", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
