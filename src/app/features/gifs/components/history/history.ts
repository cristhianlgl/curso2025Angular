import { Component, computed, inject } from '@angular/core';
import { GifsList } from "../trending/gifs-list/gifs-list";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifsServices } from '../../services/gifs.services';

@Component({
  selector: 'app-history',
  imports: [GifsList],
  templateUrl: './history.html',
  styles: ``
})
export default class History {
  param = inject(ActivatedRoute).params.subscribe(
    params => params['query'])

  queryParam = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query']
      )
    )
  )
  gifsServices =inject(GifsServices)
  gifsHistory = computed(() => this.gifsServices.getHistoryforQuery(this.queryParam()))
}
