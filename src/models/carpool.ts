import { Member } from './member';

export class Carpool {

  constructor(name: string, seats: number) {
    this.name = name;
    this.seats = seats;
  }

  name: string;
  seats: number;
  members: Member[] = [];
}
