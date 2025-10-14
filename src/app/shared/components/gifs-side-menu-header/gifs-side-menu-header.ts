import { Component } from '@angular/core';
import { environment } from '@envs/environment';

@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.html',
  styles: ``
})
export class GifsSideMenuHeader {
   envs = environment;
}
