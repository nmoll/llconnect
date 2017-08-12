import { Injectable } from '@angular/core';
import { Carpool } from '../models/carpool';

@Injectable()
export class Carpools {
  carpools: Carpool[] = [];

  constructor() {
    this.carpools = [
      new Carpool('Peace Gardens 2017', 5),
      new Carpool('LLC Summer Services 2017', 12),
      new Carpool('Colorado Youth Days', 2)
    ]
  }

  create(carpool: Carpool): Promise<Carpool> {
    this.carpools.push(carpool);
    return new Promise((resolve, rejects) => {
      resolve(carpool);
    });
  }

  list(): Promise<Carpool[]> {
     return new Promise((resolve, reject) => {
       resolve(this.carpools);
     });
  }

}
