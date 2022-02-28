import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddComponent} from "./pages/add/add.component";
import {HomeComponent} from "./pages/home/home.component";
import {ListComponent} from "./pages/list/list.component";
import {SearchComponent} from "./pages/search/search.component";
import {ViewComponent} from "./pages/view/view.component";
import {MyMoviesComponent} from "./pages/my-movies/my-movies.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "add",
        component: AddComponent
      },
      {
        path: "list",
        component: ListComponent
      },
      {
        path: "search",
        component: SearchComponent
      },
      {
        path: "seen",
        component: MyMoviesComponent
      },
      {
        path: ":id",
        component: ViewComponent
      },
      {
        path: "**",
        redirectTo: ""
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
