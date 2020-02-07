import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { MediaComponent } from './_components/media/media.component';
import { ResearchComponent } from './_components/research/research.component';
import { CVComponent } from './_components/cv/cv.component';
import { ContactComponent } from './_components/contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'media', component: MediaComponent },
  { path: 'projects', component: ResearchComponent },
  { path: 'cv', component: CVComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
