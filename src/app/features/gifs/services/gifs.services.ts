import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment';
import { map, tap } from 'rxjs';
import { Gif } from 'src/app/shared/interfaces/gif.interface';
import type { GiphyResponse } from 'src/app/shared/interfaces/githy.interface';
import { GifMapper } from 'src/app/shared/mappers/gifMapper';

const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const gifHistory = localStorage.getItem('historyGif')
  return gifHistory ? JSON.parse(gifHistory) : {}
}

@Injectable({
  providedIn: 'root',
})
export class GifsServices {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  historySearchedGif = signal<Record<string, Gif[]>>( loadFromLocalStorage());
  historySearchedGifKeys = computed(() => Object.keys(this.historySearchedGif()));

  constructor() {
    this.loadTrendigGifs();
  }

  loadTrendigGifs() {
    this.http
      .get<GiphyResponse>(`${environment.baseUrl}/gifs/trending`, {
        params: {
          api_key: environment.apiKey,
          limit: 24,
          offset: 0,
          rating: 'r',
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyArrayToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      });
  }

  getSearchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.baseUrl}/gifs/search`, {
        params: {
          api_key: environment.apiKey,
          q: query,
          limit: 24,
          offset: 0,
          rating: 'r',
          lang: 'es',
        },
      })
      .pipe(
        map(({ data }) => GifMapper.mapGiphyArrayToGifArray(data)),
        tap((data) =>
          this.historySearchedGif.update((history) => ({ ...history, [query.toLowerCase()]: data }))
        )
      );
  }

  getHistoryforQuery(query: string) {
    return this.historySearchedGif()[query] ?? [];
  }

  saveToStorage = effect(() => {
    localStorage.setItem('historyGif',JSON.stringify(this.historySearchedGif()))
  });
}
