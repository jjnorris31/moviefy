import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Popular} from '../interfaces/popular';
import {environment} from "../../environments/environment";
import {Movie} from "../interfaces/movie";

@Injectable({
  providedIn: 'root',

})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  public getPopularMovies(page: number) {
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.api_key}&page=${page}`;
    return this.httpClient.get<Popular>(endpoint);
  }

  public getMovie(id: string) {
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.api_key}`;
    return this.httpClient.get<Movie>(endpoint);
  }
}
