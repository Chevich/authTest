import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-dashboard-dumb
      [data]="data$ | async"
      (notifyMe)="onNotify($event)"
    ></app-dashboard-dumb>
  `,
})
export class DashboardContainerComponent implements OnInit {
  data$: Observable<any>;

  constructor(
    private readonly dashboardService: DashboardService,
  ) {
    this.data$ = this.dashboardService.data$;
  }

  ngOnInit(): void {
    this.dashboardService.getData('1');
  }

  onNotify(event: boolean): void {
    console.log('onNotify >>', event);
  }

}
