import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: "movies",
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
    canLoad: [AuthGuard]
  },
  {
    path: "404",
    component:  NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "404"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
