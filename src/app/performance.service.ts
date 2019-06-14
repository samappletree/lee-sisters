import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Performance } from './performance';
import { PERFORMANCES } from './performance-list';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor() { }

  getPerformances(): Observable<Performance[]> {
      return of(PERFORMANCES);
  }

}
