import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith, switchMap} from "rxjs/operators";
import {MoviesService} from "../../../services/movies.service";
import {Movie} from "../../../interfaces/movie";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchMovie = new FormControl('');
  options = ["mary", "leo", "sofi"]
  movies!: Movie[];


  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.searchMovie.valueChanges.pipe(
      switchMap(value => this.movieService.getMovieByName(value)),
    ).subscribe((popular) => this.movies = popular.results);
  }

  displayFn(movie: Movie): string {
    return movie.original_title ?? '';
  }

}
