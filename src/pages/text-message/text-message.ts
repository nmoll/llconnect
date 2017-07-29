import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { TranslateService } from '@ngx-translate/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-text-message',
  templateUrl: 'text-message.html'
})
export class TextMessagePage {

  phoneNumbers: Array<string>;
  textMessage: string;
  messages: any;

  constructor(
    private sms: SMS,
    navParams: NavParams,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private translateService: TranslateService
  ) {
    this.phoneNumbers = navParams.get('phoneNumbers');
    this.loadMessages();
  }

  sendMessage(): void {
    this.sms.send(this.phoneNumbers, this.textMessage).then(() => {
      this.navCtrl.popToRoot();
      this.showToast(this.messages.MESSAGE_SEND_SUCCESS);
    }, (err) => {
      this.showToast(this.messages.MESSAGE_SEND_FAILURE + ' ' + JSON.stringify(err));
    });
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  loadMessages(): void {
    this.translateService.get([
      'INVITATION_MESSAGE_PLACEHOLDER',
      'MESSAGE_SEND_SUCCESS',
      'MESSAGE_SEND_FAILURE'
    ]).subscribe(values => {
      this.messages = values;
      this.textMessage = values.INVITATION_MESSAGE_PLACEHOLDER;
    });
  }

}
