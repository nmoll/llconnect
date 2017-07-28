import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Member } from '../../models/member';

@Injectable()
export class Members {
  members: Member[] = [];

  constructor(public http: Http) {
    let members = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg"
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg"
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg"
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg"
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg"
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg"
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg"
      }
    ];

    for (let member of members) {
      this.members.push(new Member(member.name, member.profilePic));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.members;
    }

    return this.members.filter((member) => {
      for (let key in params) {
        let field = member[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return member;
        } else if (field == params[key]) {
          return member;
        }
      }
      return null;
    });
  }

  add(member: Member) {
    this.members.push(member);
  }

  delete(member: Member) {
    this.members.splice(this.members.indexOf(member), 1);
  }
}
