import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../app/Home/home-page/home-page';
import { Login } from '../app/Auth/login/login';
import {EditPage} from '../app/Home/edit-page/edit-page';
import { AddDish } from './Home/add-dish/add-dish';

const routes: Routes = 
[
    {path:'',component:Login},
    {path:'Home',component:HomePage},
    {path:'Edit/:id',component:EditPage},
    {path:'Add',component:AddDish},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
