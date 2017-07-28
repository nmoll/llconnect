import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { MemberDetailPage } from '../member-detail/member-detail';

import { Members } from '../../providers/providers';

import { Member } from '../../models/member';

@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html'
})
export class MemberListPage {

  contacts: Member[];
  filteredContacts: Member[];

  constructor(public navCtrl: NavController, public members: Members, public modalCtrl: ModalController) {
    this.contacts = this.members.query();
    this.filteredContacts = [];
    this.contacts.forEach((contact: Member) => {
      this.filteredContacts.push(contact);
    });
  }

  ionViewDidLoad() {
  }

  deleteMember(member) {
    this.members.delete(member);
  }

  openMember(member: Member) {
    this.navCtrl.push(MemberDetailPage, {
      member: member
    });
  }

  filterMembers(event): void {
    this.filteredContacts.length = 0;

    let searchTerm = (event.target.value || '').trim();

    this.contacts.forEach((contact: Member) => {
      if (searchTerm) {
        if (contact.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          this.filteredContacts.push(contact);
        }
      } else {
        this.filteredContacts.push(contact);
      }
    });
  }

}
