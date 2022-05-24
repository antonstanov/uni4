import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uni4';

  constructor(
    private metaService: Meta
  ) {
    this.metaService.addTag( { name: 'description', content: 'Article Description' })
  }
}
