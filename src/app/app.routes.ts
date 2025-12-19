import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/characters/pages/characters-page/characters-page.component').then(
            (m) => m.CharactersPageComponent,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./features/characters/pages/character-detail-page/character-detail-page.component').then(
            (m) => m.CharacterDetailPageComponent,
          ),
      },
    ],
  },
  {
    path: 'locations',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/locations/pages/locations-page/locations-page.component').then(
            (m) => m.LocationsPageComponent,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./features/locations/pages/location-detail-page/location-detail-page.component').then(
            (m) => m.LocationDetailPageComponent,
          ),
      },
    ],
  },
  {
    path: 'episodes/:id',
    loadComponent: () =>
      import('./features/episodes/pages/episode-detail-page/episode-detail-page.component').then(
        (m) => m.EpisodeDetailPageComponent,
      ),
  },

  {
    path: 'episodes',
    loadComponent: () =>
      import('./features/episodes/pages/episodes-page/episodes-page.component').then(
        (m) => m.EpisodesPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'characters',
  },
];
