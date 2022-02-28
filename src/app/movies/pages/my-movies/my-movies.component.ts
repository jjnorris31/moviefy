import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../interfaces/movie";
import {DbService} from "../../../services/db.service";
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationComponent} from "../../components/confirmation/confirmation.component";


@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  public movies: Movie[] = [];
  public selectedMovie!: Movie;

  constructor(private dbService: DbService,
              private matDialog: MatDialog) { }

  async ngOnInit() {
    await this.getSeenMovies();
  }

  openDeleteDialog(movie: Movie) {
    this.setSelectedMovie(movie);
    let confirmationDialogRef = this.matDialog.open(ConfirmationComponent, {});
    confirmationDialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.dbService.deleteMovie(this.selectedMovie.id);
        await this.getSeenMovies();
      }
    });
  }

  private setSelectedMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  private async getSeenMovies() {
    this.movies = await this.dbService.getAllMovies();
  }

}
