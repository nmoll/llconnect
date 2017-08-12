import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { CarpoolCreatePage } from '../carpool-create/carpool-create';
import { CarpoolDetailPage } from '../carpool-detail/carpool-detail';
import { Carpool } from '../../models/carpool';
import { Carpools } from '../../providers/carpools';

@Component({
  selector: 'page-carpool-list',
  templateUrl: 'carpool-list.html'
})
export class CarpoolListPage {

  carpoolList: Array<Carpool>;

  constructor(private modalCtrl: ModalController, private carpools: Carpools, private navCtrl: NavController) {
    this.carpools.list().then((carpoolList) => {
      this.carpoolList = carpoolList;
    });
  }

  createCarpool(): void {
      let addModal = this.modalCtrl.create(CarpoolCreatePage);
      addModal.present();
  }

  openCarpool(carpool: Carpool) {
    this.navCtrl.push(CarpoolDetailPage, {
      carpool: carpool
    });
  }

}
