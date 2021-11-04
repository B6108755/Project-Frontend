import { UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmemberComponent } from './components/addmember/addmember.component';
import { AdminComponent } from './components/admin/admin.component';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path : 'home' , component: HomeComponent},
  {path : 'signin' , component : SigninComponent},
  {path : 'admin' , component : AdminComponent},
  {path : 'update' , component : UpdateComponent},
  {path : 'addmember' , component : AddmemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
