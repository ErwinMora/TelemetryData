import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'graphs',
    loadChildren: () =>
      import('./pages/graphs/graphs.routes').then((m) => m.GRAPH_ROUTES),
    // canActivate: [AuthGuard]
  }
];
