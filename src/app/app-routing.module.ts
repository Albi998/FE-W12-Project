import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [{
  path:'',
  canActivate:[AuthGuard],
  loadChildren:()=>
  import('./dashboard/dashboard.module').then(
    (mod)=>mod.DashboardModule
  )
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
