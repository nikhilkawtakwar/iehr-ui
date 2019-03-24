import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
