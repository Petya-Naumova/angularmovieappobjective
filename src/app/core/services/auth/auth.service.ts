import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user/user';
import {HttpClient} from '@angular/common/http';
import {MoviesResultsArray} from "../../interfaces/movie-results-array/movie-results-array";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(userInfo: User) {

    return this.http.get<{request_token: string}>(
      'https://api.themoviedb.org/3/authentication/token/new'
    ).subscribe(data => {
      console.log('data: ', data.request_token);
      window.location.href =
        'https://www.themoviedb.org/authenticate'.concat('/' + data.request_token + '?redirect_to=' + encodeURIComponent('http://localhost:4200/'));
    });
  }

  getSessionId(requestToken: string) {
    return this.http.post('https://api.themoviedb.org/3/authentication/session/new', {request_token: requestToken} );
  }
}
