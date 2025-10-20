import { Component, inject } from '@angular/core';
import { GifsList } from "../trending/gifs-list/gifs-list";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  imports: [GifsList],
  templateUrl: './history.html',
  styles: ``
})
export default class History {
  param = inject(ActivatedRoute).params.subscribe(params => params['query'])
  param = toSignal()
  inject(ActivatedRoute).params.subscribe(params => params['query'])
}
