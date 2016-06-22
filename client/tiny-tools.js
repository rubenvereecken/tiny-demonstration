import {Component, View} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-tools',
  directives: [],
  template: `
  <button type="button" class="btn btn-primary" (click)="compile()">Compile</button>
  <button type="button" class="btn btn-default" (click)="execute()">Execute</button>
  `
})

export class TinyTools {
  constructor(tinyService: TinyService) {
    this.tinyService = tinyService
    this.current = tinyService.current;
  }

  compile() {
    this.tinyService.compileSource();
  }

  execute() {
    this.tinyService.compileAndExecute();
  }


}

