import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { MemberDetailPage } from '../member-detail/member-detail';
import { MemberInvitationPage } from '../member-invitation/member-invitation';

import { Members } from '../../providers/providers';

import { Member } from '../../models/member';

@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html'
})
export class MemberListPage {

  contacts: Member[];
  filteredMembers: Member[];

  constructor(public navCtrl: NavController, public members: Members, public modalCtrl: ModalController) {
    this.contacts = this.members.query();
    this.filteredMembers = [];
    this.contacts.forEach((contact: Member) => {
      this.filteredMembers.push(contact);
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

  inviteMembers() {
    this.navCtrl.push(MemberInvitationPage);
  }

  filterMembers(event): void {
    this.filteredMembers.length = 0;

    let searchTerm = (event.target.value || '').trim();

    this.contacts.forEach((contact: Member) => {
      if (searchTerm) {
        if (contact.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          this.filteredMembers.push(contact);
        }
      } else {
        this.filteredMembers.push(contact);
      }
    });
  }

}
