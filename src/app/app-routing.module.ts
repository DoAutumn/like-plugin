import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo1',
    pathMatch: 'full'
  },
  {
    path: 'demo1',
    loadChildren: () => import('./demo1/demo1.module').then(m => m.Demo1Module)
  },
  {
    path: 'demo2',
    loadChildren: () => import('./demo2/demo2.module').then(m => m.Demo2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
