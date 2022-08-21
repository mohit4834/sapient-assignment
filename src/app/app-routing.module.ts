import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'all/:id', loadChildren: () => import('./all/all.module').then(m => m.AllModule) },
  { path: '**', loadChildren: () => import('./all/all.module').then(m => m.AllModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
