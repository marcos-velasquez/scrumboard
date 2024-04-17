import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'scrumboards',
    loadComponent: () => import('./pages/scrumboard/presenter/scrumboard-list.component').then((c) => c.ScrumBoardListComponent),
  },
  { path: '**', redirectTo: 'scrumboards' },
];
