import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private readonly starships: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  readonly starships$: Observable<any[]> = this.starships.asObservable();

  constructor() { }

  listChanges(list: any[]): void {
    this.starships.next(list);
  }
}
