import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BankloginComponent } from './banklogin/banklogin.component';
import { FooterComponent } from './footer/footer.component';
import { BankdashComponent } from './bankdash/bankdash.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'application',
    component:ApplicationComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'bank-login',
    component:BankloginComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'bankdash',
    component:BankdashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
