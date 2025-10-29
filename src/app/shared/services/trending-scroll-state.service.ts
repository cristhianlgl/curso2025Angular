import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingScrollStateService {
  scrollState = signal(0)
}
