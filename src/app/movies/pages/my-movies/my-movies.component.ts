import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../interfaces/movie";
import {DbService} from "../../../services/db.service";

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private dbService: DbService) { }

  async ngOnInit() {
    this.movies = await this.dbService.getAllMovies();
  }

}
