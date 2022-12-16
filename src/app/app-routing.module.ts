import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonComponent } from './person/person.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvGenreComponent } from './tv-genre/tv-genre.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TvComponent},
  {path:'genres' , component:GenresComponent},
  {path: 'genres/:id/:name',component:GenreComponent},
  {path: 'genres-tv/:id/:name', component:TvGenreComponent},
  {path: 'movies/:id', component:MovieDetailsComponent},
  {path: 'tv/:id', component:TvDetailsComponent},
  {path: 'person/:id', component:PersonComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
