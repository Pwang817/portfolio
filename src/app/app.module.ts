import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './component/leftmenu/leftmenu.component';
import { HomeComponent } from './component/home/home.component';
import { WorkComponent } from './component/work/work.component';
import { AboutComponent } from './component/about/about.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';
import { BuytitionComponent } from './component/buytition/buytition.component';
import { PatientComponent } from './component/patient/patient.component';
import { EcoComponent } from './component/eco/eco.component';
import { StartupService } from './component/service/startup.service';


const appRoutes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'work', component: WorkComponent },
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'buytition', component: BuytitionComponent },
    { path: 'patient', component: PatientComponent },
    { path: 'eco', component: EcoComponent },
    { path: '**', component: HomeComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    BuytitionComponent,
    PatientComponent,
    EcoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [StartupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
