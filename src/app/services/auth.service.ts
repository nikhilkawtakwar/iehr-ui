import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:8080/users/signin?username=${username}&password=${password}`, {});
    }

}
