import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {

    isShowMenu = false;
    @Output() showMenuEvent: EventEmitter<any> = new EventEmitter();

  constructor(private authenticationService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  toggleShowMenu() {
    this.isShowMenu = !this.isShowMenu;
    this.showMenuEvent.emit(this.isShowMenu);
  }

  logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
