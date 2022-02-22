import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import { EditComponent } from './pages/edit/edit.component';
import {MaterialModule} from "../material/material.module";
import { ViewComponent } from './pages/view/view.component';


@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
  ]
})
export class MoviesModule { }
