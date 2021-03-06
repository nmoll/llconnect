import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarpoolListPage } from '../carpool-list/carpool-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuItems: Array<{ title: string, page: any }> = [
    { title: 'Carpools', page: CarpoolListPage },
    { title: 'Committees', page: null },
    { title: 'Events', page: null },
    { title: 'For Sale', page: null },
    { title: 'Suggestions for LLConnect', page: null }
  ];

  public constructor(public navCtrl: NavController) {

  }

  onMenuItemSelect(menuItem: any): void {
    if (menuItem.page) {
      this.navCtrl.push(menuItem.page);
    }
  }

}
