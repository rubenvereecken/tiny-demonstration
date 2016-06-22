import {Component, View} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-source',
  directives: [],
  template: `
  <textarea class="form-control" id="" name="" rows="20" [(ngModel)]="current.source">
  {{current.source}}
  </textarea>
  `
})

export class TinySource {
  constructor(tinyService: TinyService) {
    this.tinyService = tinyService
    this.current = tinyService.current;
  }
}
