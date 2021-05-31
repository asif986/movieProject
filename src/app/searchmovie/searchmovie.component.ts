import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/keyboard.json';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface keyboard {
  alaphabetKeyBoard: any[],

}

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent implements OnInit {

  alaphabetKeyBoard: any[] = [];
  hideAlphabetKeyword: boolean = true;
  hideNumberKeyword: boolean = false;
  searchMovieString="";
  
  searchStr;
  movieName :string;

  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    console.log(data.alaphabetKeyBoard);

    data.alaphabetKeyBoard.map(res => {

      this.alaphabetKeyBoard.push(res);
    })
    // this.alaphabetKeyBoard = data.alaphabetKeyBoard;
  }

  keyboard(key) {

    
    let str2 = key.target.value;
     this.searchMovieString = this.searchMovieString+str2;
     console.log(this.searchMovieString);
    
  }
  showNumbericKeyboard(id: any) {
    //  console.log(id);
    this.hideAlphabetKeyword = false;
    this.hideNumberKeyword = true;

  }
  showAlphabetKeyboard() {
    this.hideAlphabetKeyword = true;
    this.hideNumberKeyword = false;
  }
  clear() {
    this.searchMovieString ="";
  }
  space() {
    this.searchMovieString = this.searchMovieString+" ";

  }
  searchMovie() {
    // ce87ece9f027f85d16babc316e51c491

    this.http.get('https://api.themoviedb.org/3/search/movie?api_key=ce87ece9f027f85d16babc316e51c491&query=' + this.searchMovieString)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/searchResult', { state: res });
      }, (e) => {
        console.log(e);
      })

  }
}
