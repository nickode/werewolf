import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CreateComponent} from '../app/create/create.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
   path:'home',
   component:HomeComponent 
  }
  ,
  {
    path:'create',
    component: CreateComponent
  }
  ,
  {
    path:'join',
    component: JoinComponent
  },
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then( m => m.LobbyPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
