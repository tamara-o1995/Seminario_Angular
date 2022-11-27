import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TendenciasRockAboutComponent } from './tendencias-rock-about/tendencias-rock-about.component';
import { TendenciasRockProductosComponent } from './tendencias-rock-productos/tendencias-rock-productos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: TendenciasRockProductosComponent
  },
  {
    path: 'about',
    component: TendenciasRockAboutComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
