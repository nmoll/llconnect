import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact, Contacts } from '@ionic-native/contacts';
import { TextMessagePage } from '../text-message/text-message';

@Component({
  selector: 'page-member-invitation',
  templateUrl: 'member-invitation.html'
})
export class MemberInvitationPage {

  contactList: Array<any> = [];
  selected: Map<number, boolean> = new Map();
  selectedCount: number = 0;

  constructor(private contacts: Contacts, private navCtrl: NavController) {
      this.loadContacts();
  }

  loadContacts(): void {
    this.contactList = [];
    if (this.canAccessContacts()) {
      this.contacts.find(['*']).then((contacts: Contact[]) => {
        contacts.forEach((contact: Contact) => {
          this.contactList.push(contact);
          this.selected[contact.id] = false;
        });
        this.contactList = this.contactList.sort(function (a, b) {
          if (a.name.formatted < b.name.formatted) return -1;
          if (a.name.formatted > b.name.formatted) return 1;
          return 0;
        });
      });
    } else {
      this.contactList = [
        { id: 1, name: { formatted: 'Nate Moll' }, phoneNumbers: [{ value: '(928) 713-9392' }] },
        { id: 2, name: { formatted: 'Kate Moll' }, phoneNumbers: [{ value: '(425) 923-9038' }] }
      ];
      this.selected[1] = false;
      this.selected[2] = false;
    }
  }

  onSelect(contact): void {
    if (this.selected[contact.id]) {
      this.selectedCount++;
    } else {
      this.selectedCount--;
    }
  }

  getSelectedContacts(): Array<any> {
    return this.contactList.filter((contact: Contact) => {
      return this.selected[contact.id];
    });
  }

  sendMessage(): void {

    let phoneNumbers = this.getSelectedContacts().map((contact: Contact) => {
      return contact.phoneNumbers[0].value;
    });

    this.navCtrl.push(TextMessagePage, {
      phoneNumbers: phoneNumbers
    });
  }

  canAccessContacts(): boolean {
    return window.location.hostname != 'localhost';
  }

}
