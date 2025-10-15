import { Component, input } from '@angular/core';
import { GifsListItem } from "../gifs-list-item/gifs-list-item";
import type { Gif } from 'src/app/shared/interfaces/gif.interface';

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
  styles: ``
})
export class GifsList {
  gifs = input.required<Gif[]>();
}
