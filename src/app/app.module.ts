import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from './pipe/pipe.module';
import { SkeletonModule } from './shared/skeleton/skeleton.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GenreComponent } from './genre/genre.component';
import { TvGenreComponent } from './tv-genre/tv-genre.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppMovieDialogComponent } from './movie-details/dialog/app-movie-dialog/app-movie-dialog.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvDialogComponent } from './tv-details/dialog/tv-dialog/tv-dialog.component';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    TvComponent,
    GenresComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent,
    GenreComponent,
    TvGenreComponent,
    MovieDetailsComponent,
    AppMovieDialogComponent,
    TvDetailsComponent,
    TvDialogComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    CarouselModule,
    HttpClientModule,
    PipeModule,
    SkeletonModule,
    MatProgressBarModule,
    CommonModule,
    ScrollingModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
