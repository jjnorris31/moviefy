import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith, switchMap} from "rxjs/operators";
import {MoviesService} from "../../../services/movies.service";
import {Movie} from "../../../interfaces/movie";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Router} from "@angular/router";
import {DbService} from "../../../services/db.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchMovie = new FormControl('');
  options = ["mary", "leo", "sofi"]
  movies: Movie[] = [];


  constructor(
    private movieService: MoviesService,
    private dbService: DbService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchMovie.valueChanges.pipe(
      switchMap(value => this.movieService.getMovieByName(value)),
    ).subscribe((popular) => {
      this.movies = popular.results.length === 0 ? [] : popular.results;
    });
  }

  displayFn(movie: Movie): string {
    return movie && movie.original_title ? movie.original_title : '';
  }

  public async onMovieSelected(selectedEvent: MatAutocompleteSelectedEvent) {
    if (selectedEvent.option.value) {
      await this.dbService.addMovie(selectedEvent.option.value);
      await this.router.navigate(['/movies', selectedEvent.option.value.id]);
    }
  }

}
