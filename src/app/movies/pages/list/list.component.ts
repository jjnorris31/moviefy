import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {Movie} from "../../../interfaces/movie";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public movie!: Movie;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }


  public getMovie() {
    this.movieService.getMovieById("").subscribe((movie) => {
      this.movie = movie;
    })
  }

}
