import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TvComponent},
  {path:'genres' , component:GenresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
