import { Component, input } from '@angular/core';
import { GifsListItem } from "../gifs-list-item/gifs-list-item";

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
  styles: ``
})
export class GifsList {
  gifs = input.required<string[]>();
}
