import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CreateComponent} from '../app/create/create.component';
<<<<<<< HEAD
import { LobbyComponent } from './lobby/lobby.component';
=======
import { JoinComponent } from './join/join.component';
>>>>>>> b6daf27d04f4b3216589f0f8f7a4cdf52a92101c

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'create',
    component: CreateComponent
  },
  {
    path: 'lobby',
    component: LobbyComponent
  }
  ,
  {
    path:'join',
    component: JoinComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
