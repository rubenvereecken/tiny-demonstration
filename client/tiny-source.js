import {Component, View} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-source',
  directives: [],
  templateUrl: 'tiny-source.html',
})

export class TinySource {
  constructor(tinyService: TinyService) {
    this.tinyService = tinyService
    this.current = tinyService.current;
  }
}
