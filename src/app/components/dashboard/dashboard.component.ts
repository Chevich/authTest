import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data$: Observable<any>;

  constructor(
    private readonly authService: AuthService,
    private readonly dashboardService: DashboardService,
  ) {
    this.data$ = this.dashboardService.data$;
  }

  ngOnInit(): void {
    this.dashboardService.getData('1');
  }

  logout(): void {
    this.authService.logout();
  }

}
