import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { SearchmovieresultComponent } from './searchmovieresult/searchmovieresult.component';




const routes: Routes = [
{
     path:'',
   component:SearchmovieComponent
},
  { path: 'searchMovie', component: SearchmovieComponent},
  { path: 'searchResult', component: SearchmovieresultComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
