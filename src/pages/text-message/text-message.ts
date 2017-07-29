import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-text-message',
  templateUrl: 'text-message.html'
})
export class TextMessagePage {

  phoneNumbers: Array<string>;
  message: string = 'Try out the new LLConnect app!';

  constructor(
    private sms: SMS,
    navParams: NavParams,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.phoneNumbers = navParams.get('phoneNumbers');
  }

  sendMessage(): void {
    this.sms.send(this.phoneNumbers, this.message).then(() => {
      this.navCtrl.popToRoot();
      this.showToast('Message Sent!');
    }, () => {
      this.showToast('Unable to send message.');
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

}
