import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { MomentModule } from 'angular2-moment';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthGuard } from './guards/auth.guard';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

import * as $ from 'jquery';

import 'mdn-polyfills/Object.assign';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';

import 'rxjs';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../bower_components/jquery/dist/jquery.min.js';
import '../../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';
import '../../bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import '../../node_modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css';
import '../../node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js';


const appRoutes: Routes =  [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        AppComponent, DashboardComponent, NavbarComponent, LoginComponent, RegisterComponent, HomeComponent, ProfileComponent
    ],
    imports: [
        NKDatetimeModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        FlashMessagesModule,
        MomentModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ValidateService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
