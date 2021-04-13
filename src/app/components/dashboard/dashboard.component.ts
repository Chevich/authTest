import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // data$: Observable<any>;
  data: any;
  sub$ = new Subscription();

  constructor(
    private readonly authService: AuthService,
    private readonly dashboardService: DashboardService,
  ) {
    this.sub$.add(this.dashboardService.data$.subscribe(value => {
      this.data = value;
    }));
  }

  ngOnInit(): void {
    this.dashboardService.getData('1');
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
