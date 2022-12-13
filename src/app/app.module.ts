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
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    TvComponent,
    GenresComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    CarouselModule,
    HttpClientModule,
    PipeModule,
    SkeletonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
