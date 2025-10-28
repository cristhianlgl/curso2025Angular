import { Component, inject } from '@angular/core';
import { GifsList } from "./gifs-list/gifs-list";
import { GifsServices } from '../../services/gifs.services';

@Component({
  selector: 'app-trending',
  imports: [GifsList],
  templateUrl: './trending.html',
  styles: ``
})
export default class Trending {
  gifServices = inject(GifsServices);
  trendingGifsGroup = this.gifServices.trendingGifsGroup;

}
