import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HirdetesekComponent } from './components/hirdetesek/hirdetesek.component';
import { HirdeteskezelesComponent } from './components/hirdeteskezeles/hirdeteskezeles.component';

export const routes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'hirdetesek', component: HirdetesekComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'hirdeteskezeles', component: HirdeteskezelesComponent}
];