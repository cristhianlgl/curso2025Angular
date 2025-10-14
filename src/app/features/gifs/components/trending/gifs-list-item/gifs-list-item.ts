import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  styles: ``
})
export class GifsListItem {
  urlItem = input.required<string>();
}
