import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,
              private authService: AuthService) { }

  async ngOnInit() {
  }

  public async login() {
    await this.authService.login();
    await this.router.navigate(['movies/list']);
  }

}
