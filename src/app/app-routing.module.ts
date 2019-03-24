import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './user/user.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: UserDashboardComponent,
        canActivate: [AuthGuard],
        children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'user', component: UserComponent },
      { path: 'user-add', component: UserSetupComponent },
      { path: 'calendar', component: CalendarComponent }
    ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
