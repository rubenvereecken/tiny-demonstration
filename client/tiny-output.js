import {Component, ViewChild} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-output',
  directives: [],
  template: `
<pre><code>{{current.result.tinyOutput}}</code></pre>
  `
})

export class TinyOutput {
  constructor(tinyService: TinyService) {
    this.tinyService = tinyService;
    this.current = tinyService.current;
  }
}


