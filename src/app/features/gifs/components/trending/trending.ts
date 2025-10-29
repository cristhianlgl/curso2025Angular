import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifsList } from "./gifs-list/gifs-list";
import { GifsServices } from '../../services/gifs.services';
import { TrendingScrollStateService } from 'src/app/shared/services/trending-scroll-state.service';

@Component({
  selector: 'app-trending',
  imports: [GifsList],
  templateUrl: './trending.html',
  styles: ``
})
export default class Trending implements AfterViewInit {

  gifServices = inject(GifsServices);
  trendingScrollStateService = inject(TrendingScrollStateService);
  trendingGifsGroup = this.gifServices.trendingGifsGroup;
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('scrollDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;
    scrollDiv.scrollTop = this.trendingScrollStateService.scrollState()
  }

  handleScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    const { scrollTop, clientHeight, scrollHeight } = scrollDiv;
    this.trendingScrollStateService.scrollState.set(scrollTop);
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    if(isAtBottom)
      this.gifServices.loadTrendigGifs();

  }
}
