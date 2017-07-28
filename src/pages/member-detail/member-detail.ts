import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-member-detail',
  templateUrl: 'member-detail.html'
})
export class MemberDetailPage {
  member: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.member = navParams.get('member');
  }

}
