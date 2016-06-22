import {Component, View} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-input',
  directives: [],
  template: `
  <textarea class="form-control" rows="10" [(ngModel)]="current.input">
  {{current.input}}
  </textarea>
  `
})

export class TinyInput {
  constructor(tinyService: TinyService) {
    this.tinyService = tinyService
    this.current = tinyService.current;
  }
}

