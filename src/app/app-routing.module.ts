import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'trafic-light',
    loadChildren: () => import('./modules/trafic-light/trafic-light.module').then(m => m.TraficLightModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
