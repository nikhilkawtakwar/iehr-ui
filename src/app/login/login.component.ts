import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

 constructor(private formBuilder: FormBuilder,
             private authenticationService: AuthService,
             private userService: UserService,
             private router: Router) { }

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
            console.log(res);
            // Set access_token in local storage
            localStorage.setItem('access_token', res);
            this.userService.getLoggedInUser(this.f.userName.value).subscribe((userRes) => {
              localStorage.setItem('currentUser', JSON.stringify(userRes));
              this.router.navigate(['/home']);
            });
          });
        }
    }

}
