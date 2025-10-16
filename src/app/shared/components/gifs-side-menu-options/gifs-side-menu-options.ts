import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsServices } from 'src/app/features/gifs/services/gifs.services';

interface Option {
  icon: string;
  label: string;
  sublabel: string;
  link: string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',
  styles: ``
})
export class GifsSideMenuOptions {
  gifsKeys = inject(GifsServices).historySearchedGifKeys

  options: Option[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs Populares',
      link: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      sublabel: 'Buscador de Gifs',
      link: '/dashboard/search'
    }
  ];
}
