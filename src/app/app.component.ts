import { Component, OnInit } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {

  constructor() {
  }
  ngOnInit () {}
}

