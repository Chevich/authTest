import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

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
    this.http.get(
      `${ environment.basePath }/list/${ listId }`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${ environment.apiToken }`,
        },
      },
    ).subscribe(data => this.data$.next(data));
  }
}
