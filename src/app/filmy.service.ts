import { Injectable } from '@angular/core';
import { Film } from './modele/film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    {id: 0, tytul: 'Drive', opis: 'Opis drive', rok: 1995},
    {id: 1, tytul: 'Harrypotter', opis: 'Opis harrypottera', rok: 2000},
    {id: 2, tytul: 'Starwars', opis: 'Opis starwars', rok: 3000},
  ];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }

  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
