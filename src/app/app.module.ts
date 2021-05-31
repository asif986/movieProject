import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { SearchmovieresultComponent } from './searchmovieresult/searchmovieresult.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchmovieComponent,
    SearchmovieresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
