import { Injectable } from '@angular/core';

import { Member } from '../../models/member';

@Injectable()
export class Members {
  members: Member[] = [];

  constructor() {
    this.members = [
      new Member("Burt Bear", "assets/img/speakers/bear.jpg"),
      new Member("Charlie Cheetah", "assets/img/speakers/cheetah.jpg"),
      new Member("Donald Duck", "assets/img/speakers/duck.jpg"),
      new Member("Eva Eagle", "assets/img/speakers/eagle.jpg"),
      new Member("Ellie Elephant", "assets/img/speakers/elephant.jpg"),
      new Member("Molly Mouse", "assets/img/speakers/mouse.jpg"),
      new Member("Paul Puppy", "assets/img/speakers/puppy.jpg")
    ];
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
