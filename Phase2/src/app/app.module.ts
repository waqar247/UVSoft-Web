import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    BlogsComponent,
    CareerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    RouterModule.forRoot([
     { path: 'Home', component: HomeComponent},
     {path: 'About', component: AboutComponent},
     {path: 'Services', component: ServicesComponent},
     {path: 'Work', component: WorkComponent},
     {path: 'Career', component: CareerComponent},
     {path: 'Blogs', component:BlogsComponent },
     {path: 'Contact', component: ContactComponent},
     {path: '', redirectTo:'/Home', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
