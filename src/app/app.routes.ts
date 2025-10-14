import { Routes } from '@angular/router';
import DashboardComponent from './shared/pages/dashboard/dashboard.components';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./shared/pages/dashboard/dashboard.components').then(m => m.default),
        children: [
            {
                path: 'trending',
                loadComponent: () => import('./features/gifs/components/trending/trending').then(m => m.default)
            },
            {
                path: 'search',
                loadComponent: () => import('./features/gifs/components/search/search').then(m => m.default)
            },
            {
                path: '**',
                redirectTo: 'trending',
            }
        ]
    },   
    {
        path: '**',
        redirectTo: 'dashboard',
    },
];
