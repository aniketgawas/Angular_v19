import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {

  loadData$ = new Subject<void>();

  getData() {
    return of(['Apple', 'Banana', 'Orange']).pipe(
      delay(500),
      tap(() => console.log('API RESPONSE'))
    );
  }
}
