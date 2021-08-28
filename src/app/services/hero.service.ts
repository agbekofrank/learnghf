import { Injectable } from '@angular/core';
import { Hero } from '../utils/interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero: Hero;
  // private heroesUrl = 'api/heroes';  // URL to web api
  // private heroesUrl = 'http://localhost:8000/heroes/api/';
  // private heroesUrl = 'https://learnghb.herokuapp.com/heroes/api/';
  private heroesUrl = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('Hero Service: Fetched Heroes');
    return this.http.get<Hero[]>(this.heroesUrl.concat('/heroes/api/'))
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', [])),
      );
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl.concat('/heroes/api/')}${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetched hero id = ${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(
      this.heroesUrl.concat('/heroes/api/') + `${hero.id}/edit`, hero).pipe(
      tap(_ => this.log(`HeroService: Updated hero id ${hero.id}`)),
      catchError(this.handleError<any>(`Update Hero`))
    );
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(
      this.heroesUrl.concat('/heroes/api/') + `create`, hero).pipe(
      tap((newHero: Hero) => this.log(`Added hero with id = ${newHero.id}`)),
      catchError(this.handleError<Hero>(`addHero`))
    );
  }
  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl.concat('/heroes/api/')}${id}/delete`;

    return this.http.delete<Hero>(url).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(
      `${this.heroesUrl.concat('/heroes/api/')}?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
