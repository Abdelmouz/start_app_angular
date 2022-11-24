import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/app.about";
import { TransmisionComponent } from './transmision/transmision.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionComponent } from './prevention/prevention.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { FqaComponent } from './fqa/fqa.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TransmisionComponent,
    SymptomsComponent,
    PreventionComponent,
    TreatmentComponent,
    FqaComponent,
    NewsComponent,
    FooterComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
