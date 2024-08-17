import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
      path: 'dashboard',
      loadComponent: () => import('./pages/dashboard/dashboard.component').then(p => p.DashboardComponent),
  },
  {
      path: 'delivery',
      loadComponent: () => import('./pages/delivery/delivery.component').then(p => p.DeliveryComponent)
  },
  { path: '**', redirectTo: '' },
];
