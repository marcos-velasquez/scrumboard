import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'scrumboard',
    loadComponent: () =>
      import('./pages/board/infrastructure/views/board-list/board-list.component').then((c) => c.BoardListComponent),
  },
  { path: '**', redirectTo: 'scrumboard' },
];
