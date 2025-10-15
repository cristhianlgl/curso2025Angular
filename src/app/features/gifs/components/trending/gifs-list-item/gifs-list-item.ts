import { Component, input } from '@angular/core';
import type { Gif } from 'src/app/shared/interfaces/gif.interface';

@Component({
  selector: 'app-gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  styles: ``
})
export class GifsListItem {
  gif = input.required<Gif>();
}
