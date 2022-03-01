import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class AuthModule { }
