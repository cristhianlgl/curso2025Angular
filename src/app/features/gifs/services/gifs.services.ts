import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment';
import { Gif } from 'src/app/shared/interfaces/gif.interface';
import type { GiphyResponse } from 'src/app/shared/interfaces/githy.interface';
import { GifMapper } from 'src/app/shared/mappers/gifMapper';

@Injectable({
  providedIn: 'root'
})
export class GifsServices {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  constructor() {
    this.loadTrendigGifs();
  }

  loadTrendigGifs() {
    this.http.get<GiphyResponse>(`${environment.baseUrl}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: 24,
        offset: 0,
        rating: 'r'
      }
    }).subscribe((resp)=> {
      const gifs = GifMapper.mapGiphyArrayToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false)
    })
  }
}
