import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Importamos los componentes
import {LoginComponent} from './components/login/login.component';
import { PeopleComponent } from './components/people/people.component';
import {RegisterUserComponent} from './components/register-user/register-user.component';


const routes: Routes = [
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full' 
},

{
  path: 'login',
  component: LoginComponent
},

{
  path: 'register-user',
  component:RegisterUserComponent
},
{
  path: 'people',
  component:PeopleComponent
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }