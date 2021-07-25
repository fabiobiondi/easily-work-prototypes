import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
    <button
      class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400">Hello</button>

    <button class="btn">clap</button>
    <router-outlet></router-outlet>

  `,
  styles: []
})
export class AppComponent {
}
