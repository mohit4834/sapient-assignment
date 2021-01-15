import { DefaultComponent } from './shared/component/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'success', loadChildren: () => import('./success/success.module').then(m => m.SuccessModule) },
  { path: 'launch', loadChildren: () => import('./launch/launch.module').then(m => m.LaunchModule) },
  { path: 'all', loadChildren: () => import('./all/all.module').then(m => m.AllModule) },
  { path: '**', component: DefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
