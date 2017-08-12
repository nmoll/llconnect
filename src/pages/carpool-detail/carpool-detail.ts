import { Component } from '@angular/core';
import { Carpool } from '../../models/carpool';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-carpool-detail',
  templateUrl: 'carpool-detail.html'
})
export class CarpoolDetailPage {

  carpool: Carpool;

  constructor(navParams: NavParams) {
    this.carpool = navParams.get('carpool');
  }

}
