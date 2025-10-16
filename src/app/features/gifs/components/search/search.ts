import { Component, inject, signal } from '@angular/core';
import { GifsList } from "../trending/gifs-list/gifs-list";
import { GifsServices } from '../../services/gifs.services';
import { Gif } from 'src/app/shared/interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [GifsList],
  templateUrl: './search.html',
  styles: ``
})
export default class Search {
  gifsServices = inject(GifsServices)
  searchedGifs = signal<Gif[]>([]);

  SearchGifs(query: string) {
    this.gifsServices.getSearchGifs(query)
      .subscribe({
        next: gifs => this.searchedGifs.set(gifs)
    })
  }
}
