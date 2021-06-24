import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCallbackComponent } from './views/callback/callback.component';
import { AppHomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'callback',
    component: AppCallbackComponent,
  },
  {
    path: 'home',
    component: AppHomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
