import {Component, ViewChild} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-svg',
  directives: [],
  template: `
  <div *ngIf="current.result.svg">
    <h4>Since inline svg's are annoying, here's a link</h4>
    <a [href]="current.result.svg">{{current.result.svg}}</a>
  </div>
  `
  // <img *ngIf="current.result.svg" [src]="current.result.svg" />
  // <div [innerHTML]="current.result.svg"></div>
  // <div class="hidden" #svghidden>{{}}
})

export class TinySVG {
  constructor(tinyService: TinyService) {
    this.tinyService = tinyService;
    this.current = tinyService.current;
  }
}
