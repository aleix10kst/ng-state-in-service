import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {StarshipsService} from './starships.service';
import {PeopleService} from './people.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private basePath = 'https://swapi.dev/api';

  constructor(private httpClient: HttpClient, private starshipsService: StarshipsService, private peopleService: PeopleService) { }

  get(): void {
    forkJoin([this.getStarships(), this.getPeople()]).pipe(
      tap(([starships, people]) => {
        this.starshipsService.listChanges(starships.results);
        this.peopleService.listChanges(people.results);
      })
    ).subscribe();
  }

  private getStarships(): Observable<any> {
    return this.httpClient.get<any>(`${this.basePath}/starships`);
  }

  private getPeople(): Observable<any> {
    return this.httpClient.get<any>(`${this.basePath}/people`);
  }
}

