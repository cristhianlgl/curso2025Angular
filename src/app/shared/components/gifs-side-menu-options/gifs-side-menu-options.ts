import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
