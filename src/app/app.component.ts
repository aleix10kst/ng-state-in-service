import {Component, OnInit} from '@angular/core';
import {HttpService} from './services/http.service';
import {interval, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {StarshipsService} from './services/starships.service';
import {PeopleService} from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'state-service';

  people$: Observable<any[]>;
  startships$: Observable<any[]>;

  constructor(
    private httpService: HttpService,
    private starshipsService: StarshipsService,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.startships$ = this.starshipsService.starships$;
    this.people$ = this.peopleService.people$;
    interval(10000).pipe(
      tap(() => this.httpService.get())
    ).subscribe();
  }
}
