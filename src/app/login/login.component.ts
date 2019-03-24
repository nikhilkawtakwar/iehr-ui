import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

 constructor(
   private formBuilder: FormBuilder,
   private authenticationService: AuthService,
   private userService: UserService
 ) { }

 ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', [Validators.required]]
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit(value: string) {
        this.submitted = true;
        if (this.loginForm.valid) {
          this.authenticationService.login(this.f.userName.value, this.f.password.value).pipe(first()).subscribe((res) => {
            // Set access_token in local storage
            localStorage.setItem('access_token', res);
            this.userService.getLoggedInUser(this.f.userName.value).subscribe((userRes) => {
              localStorage.setItem('user', JSON.stringify(userRes));
            });
          });
          console.log('Success!!!');
        }
    }

}
