import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Tab1Root, Tab2Root, Tab3Root } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  titles: any;

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['HOME', 'MEMBERS', 'SETTINGS']).subscribe(values => {
      this.titles = values;
    });
  }
}
