import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-dumb',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input() data: any | undefined;
  @Output() notifyMe = new EventEmitter<boolean>();

  constructor(
    private readonly authService: AuthService,
  ) {
  }

  logout(): void {
    this.authService.logout();
  }

  notify(): void {
    this.notifyMe.emit(true);
  }

}
