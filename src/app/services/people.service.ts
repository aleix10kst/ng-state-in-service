import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly people: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  readonly people$: Observable<any[]> = this.people.asObservable();

  constructor() { }

  listChanges(list: any[]): void {
    this.people.next(list);
  }
}
