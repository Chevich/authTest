import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardContainerComponent } from './components/dashboard/dashboard.container';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'events',
    component: DashboardContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login/approved',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
