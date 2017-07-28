import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{ title: string }> = [
    { title: 'Carpools' },
    { title: 'Committees' },
    { title: 'Events' },
    { title: 'For Sale' },
    { title: 'Suggestions for LLConnect' }
  ];

}
