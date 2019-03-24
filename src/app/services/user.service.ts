import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getLoggedInUser(username: string) {
        return this.http.get(`http://localhost:8888/users/${username}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        });
    }
}
