import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  account: { firstName: string, lastName: string, congregation: string, email: string, phoneNumber: string, password: string } = {
    firstName: '',
    lastName: '',
    congregation: '',
    email: '',
    phoneNumber: '',
    password: ''
  };

  secret: string = '';

  private signupErrorString: string;
  private incorrectSecretString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.loadMessages();
  }

  doSignup(): void {

    if (!this.isSecretCorrect()) {
      this.showMessage(this.incorrectSecretString);
      return;
    }

    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage); // TODO: Remove this when you add your signup endpoint
      // this.showMessage(this.signupErrorString);
    });
  }

  isSecretCorrect(): boolean {
    return this.secret.toUpperCase() === 'THANKSGIVING';
  }

  showMessage(message: string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  loadMessages(): void {
    this.translateService.get(['SIGNUP_ERROR', 'INCORRECT_SECRET']).subscribe((values) => {
      this.signupErrorString = values.SIGNUP_ERROR;
      this.incorrectSecretString = values.INCORRECT_SECRET;
    });
  }

}
