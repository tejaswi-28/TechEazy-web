import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BestCoursesComponent } from './components/best-courses/best-courses.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { BootcampsPageComponent } from './components/bootcamps-page/bootcamps-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BestCoursesComponent,
    BlogsComponent,
    BootcampsComponent,
    BootcampsPageComponent,
    CoursesComponent,
    FooterComponent,
    HomePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
