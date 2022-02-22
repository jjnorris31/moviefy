import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../interfaces/movie";
import {MoviesService} from "../../../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public movie!: Movie;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.movieService.getMovie(id))
    ).subscribe(movie => this.movie = movie);
  }

}
