import { Component } from '@angular/core';
import { SideMenu } from "../../components/side-menu/side-menu";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SideMenu, RouterOutlet],
  templateUrl: './dashboard.html',
})
export default class DashboardComponent {

}
