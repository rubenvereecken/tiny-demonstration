import {Component, ViewChild} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-output',
  directives: [],
  template: `
<label>Program output</label>
<pre *ngIf="current.result.errors && current.result.errors.length > 0"><div *ngFor="#error of current.result.errors">{{error}}</div></pre>
<pre>{{current.result.tinyOutput}}</pre>
  `
})

export class TinyOutput {
  constructor(tinyService: TinyService) {
    this.tinyService = tinyService;
    this.current = tinyService.current;
  }
}


