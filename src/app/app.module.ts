import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'
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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    NgxExtendedPdfViewerModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
