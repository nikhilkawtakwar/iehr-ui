import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { UserComponent } from './user/user.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import { CarService } from './services/carservice';
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { UserSetupComponent } from './user-setup/user-setup.component';
import {StepsModule} from 'primeng/steps';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { UserService } from './services/user.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BreadcrumbComponent,
    TopbarComponent,
    MenuComponent,
    UserComponent,
    CalendarComponent,
    UserSetupComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToolbarModule,
    TooltipModule,
    InputTextModule,
    BreadcrumbModule,
    TableModule,
    DropdownModule,
    SliderModule,
    MultiSelectModule,
    FullCalendarModule,
    StepsModule,
    ToastModule,
    AppRoutingModule
  ],

  providers: [AuthService, CarService, MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
