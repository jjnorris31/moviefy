import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {Movie} from "../../../interfaces/movie";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public movies: Movie[] = [];

  public imageEndpoint: string = "https://image.tmdb.org/t/p/w300";

  public page: number = 1;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getPopularMovies()
  }

  public getPopularMovies() {
    this.movieService.getPopularMovies(this.page).subscribe((popular) => {
      this.movies = popular.results;
    })
  }

}
