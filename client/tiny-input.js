import {Component, View} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-input',
  directives: [],
  template: `
  <label>Program input</label>
  <textarea class="form-control" rows="5" [(ngModel)]="current.input">
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

