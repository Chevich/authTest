import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: '',
})
export class LoginComponent {

  constructor(
    private readonly authService: AuthService,
  ) {
    this.authService.loginApproved();
  }

}
