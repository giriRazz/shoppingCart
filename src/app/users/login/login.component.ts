import { UserService } from "./../user.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Login } from "../models/login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;
  login: Login;

  private createForm(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  private CreateFormControls(): void {
    this.email = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(60),
      Validators.email
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100)
    ]);
  }

  get useremail() {
    return this.loginForm.get("email");
  }

  get userpassword() {
    return this.loginForm.get("password");
  }

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit() {
    this.CreateFormControls();
    this.createForm();
  }

  createlogin() {
    this.login = new Login();
    this.login.userEmail = this.email.value;
    this.login.userPassword = this.password.value;
    this._userService.reqLogin(this.login).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
