import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

@Injectable()
export class Members {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/members', params)
      .map(resp => resp.json());
  }

}
