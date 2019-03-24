import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

    isShowMenu: boolean;
    currentUser: any;

    constructor() { }

    ngOnInit() {
        this.currentUser = localStorage.getItem('currentUser');
    }

    onShowMenu(showMenu: boolean) {
        this.isShowMenu = showMenu;
    }
}
