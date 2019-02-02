import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Login } from "./models/login";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  reqLogin(_login: Login) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post(
      "http://localhost:3000/user/login",
      _login,
      httpOptions
    );
  }
}
