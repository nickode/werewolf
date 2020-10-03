import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CreateComponent} from '../app/create/create.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
<<<<<<< HEAD
import { LobbyComponent } from './lobby/lobby.component';
=======
>>>>>>> 0f77fa30f087aebdbbcd1f42e21be53dedf564ae
import { JoinComponent } from './join/join.component';
>>>>>>> b6daf27d04f4b3216589f0f8f7a4cdf52a92101c



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
  },
  {
    path: 'lobby',
    component: LobbyComponent
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
