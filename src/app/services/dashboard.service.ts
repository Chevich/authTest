import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  data$ = new Subject<any>();

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  getData(listId: string): void {
    this.http.get<any>(
      `${ environment.basePath }/list/${ listId }`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${ environment.apiToken }`,
        },
      },
    ).pipe(
    tap( inf  => {
      console.log( Object.entries(inf) );
      for (let key in inf) {
        // ключи
        console.log( `${key} ` );  
        console.log( `${inf[key]} ` );  
        // значения ключей
        //alert( data[key] );
      }
    })
      )
    .subscribe(data => this.data$.next(data));
  }
}
