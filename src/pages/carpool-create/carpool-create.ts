import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular';
import { Carpools } from '../../providers/carpools';
import { Carpool } from '../../models/carpool';

@Component({
  selector: 'page-carpool-create',
  templateUrl: 'carpool-create.html'
})
export class CarpoolCreatePage {

  form: FormGroup;

  constructor(private carpools: Carpools, private viewCtrl: ViewController, private formBuilder: FormBuilder) {
    this.initForm();
  }

  done(): void {
    if (!this.form.valid) {
      return;
    }

    var carpool = new Carpool(this.form.value.name, this.form.value.seats);
    this.initForm();
    this.carpools.create(carpool).then((c) => {
      this.viewCtrl.dismiss(c);
    });
  }

  cancel(): void {
    this.viewCtrl.dismiss();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      seats: ['', Validators.required]
    });
  }

}
