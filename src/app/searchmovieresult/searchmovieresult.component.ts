import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-searchmovieresult',
  templateUrl: './searchmovieresult.component.html',
  styleUrls: ['./searchmovieresult.component.css']
})
export class SearchmovieresultComponent implements OnInit {
 // state$: Observable<object>;

 searchedMovie=[];
  constructor(public activatedRoute: ActivatedRoute,private location:Location) { }

  ngOnInit(): void {
    console.log(this.location.getState());
    let data:any =this.location.getState();
    console.log(data.results);
    this.searchedMovie =data.results;
  }

}
