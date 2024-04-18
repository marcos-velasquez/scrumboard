import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'scrumboards',
    loadComponent: () =>
      import('./pages/scrumboard/presenter/scrumboard-list.component').then((c) => c.ScrumBoardListComponent),
  },
  {
    path: 'scrumboards/:scrumBoardId',
    loadComponent: () => import('./pages/board/presenter/board-list.component').then((c) => c.BoardListComponent),
  },
  { path: '**', redirectTo: 'scrumboards' },
];
