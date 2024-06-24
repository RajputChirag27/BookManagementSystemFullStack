import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/guards/auth-guard.guard';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard], // Main component
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full'}, // Default route
      { path: 'home', component: HomepageComponent }, // Home route
      {path: 'dashboard', component: DashboardComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes),LayoutsModule],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
