import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  private booleanValueSubject = new BehaviorSubject<boolean>(false);
  booleanValue$ = this.booleanValueSubject.asObservable();

  setBooleanValue(value: boolean): void {
    this.booleanValueSubject.next(value);
  }
}
