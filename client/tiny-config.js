import {Component, View} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-config',
  directives: [],
  template: `
  <div class="form-inline">
    <div class="checkbox">
      <label>
        <input type="checkbox" [(ngModel)]="config.globalLiveness"> Global Liveness
      </label>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" [(ngModel)]="config.compressConstants"> Constant Folding
      </label>
    </div>
  </div>
  `
})

export class TinyConfig {
  constructor(tinyService: TinyService) {
    this.tinyService = tinyService
    this.config = tinyService.current.config;
  }
}


