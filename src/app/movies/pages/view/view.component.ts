import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../interfaces/movie";
import {MoviesService} from "../../../services/movies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public movie!: Movie;

  public imageEndpoint: string = "https://image.tmdb.org/t/p/w300";


  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.movieService.getMovie(params.get("id")!).subscribe((movie) => {
        this.movie = movie;
      });
    });
  }

}
