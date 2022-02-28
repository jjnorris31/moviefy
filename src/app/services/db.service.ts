import { Injectable } from '@angular/core';
import {Movie} from "../interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor() {
  }

  public openDatabase() {
    return new Promise<IDBDatabase>(function (resolve, reject) {
      let request = window.indexedDB.open("db", 1);

      request.onupgradeneeded = () => {
        let indexedDB = request.result;
        if (!indexedDB.objectStoreNames.contains("movies")) {
          indexedDB.createObjectStore("movies", {keyPath: 'id'});
        }
      }

      request.onsuccess = () => {
        resolve(request.result);
      }

      request.onerror = () => {
        reject(request.error);
      }
    });
  }

  public addMovie(movie: Movie) {
    return new Promise<void>(async (resolve, reject) => {
      let database = await this.openDatabase();
      let transaction = database.transaction("movies", "readwrite");
      let moviesStore = transaction.objectStore("movies");

      let addRequest = moviesStore.add(movie);

      addRequest.onsuccess = () => {
        resolve();
      }

      addRequest.onerror = () => {
        reject(addRequest.error);
      }
    });
  }

  public getAllMovies() {
    return new Promise<Movie[]>(async (resolve, reject) => {
      let indexedDB = await this.openDatabase();
      let transaction = indexedDB.transaction("movies", "readwrite");
      let movies = transaction.objectStore("movies");

      let getAllRequest = movies.getAll();

      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      }

      getAllRequest.onerror = () => {
        reject(getAllRequest.error);
      }
    });
  }

  public deleteMovie(id: string) {
    return new Promise<void>(async (resolve, reject) => {
      let indexedDB = await this.openDatabase();
      let transaction = indexedDB.transaction("movies", "readwrite");
      let movies = transaction.objectStore("movies");

      let deleteRequest = movies.delete(id);

      deleteRequest.onsuccess = () => {
        resolve(deleteRequest.result);
      }

      deleteRequest.onerror = () => {
        reject(deleteRequest.error);
      }
    });
  }
}
