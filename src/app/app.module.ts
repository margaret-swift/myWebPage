import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MzParallaxModule, MzNavbarModule } from 'ngx-materialize';
import { StickyNavModule } from 'ng2-sticky-nav';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './_shared/navbar/navbar.component';
import { TitleComponent } from './_shared/title/title.component';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { ResearchComponent } from './_components/research/research.component';
import { MediaComponent } from './_components/media/media.component';
import { ContactComponent } from './_components/contact/contact.component';
import { CVComponent } from './_components/cv/cv.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    HomeComponent,
    AboutComponent,
    ResearchComponent,
    MediaComponent,
    ContactComponent,
    CVComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StickyNavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
