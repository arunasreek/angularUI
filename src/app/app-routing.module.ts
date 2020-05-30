import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

//views components
import { LoginComponent } from './views/account/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './views/account/forgot-password/forgot-password.component';

// guards
import { AuthGuard } from './guards'
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "dashboard" },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
 
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'forgotPassword/emailId/:emailId/token/:token', component: ForgotPasswordComponent },
  { path: 'forgotPassword/emailId/:emailId/screen/:screen/token/:token', component: ForgotPasswordComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppRoutingModule { }