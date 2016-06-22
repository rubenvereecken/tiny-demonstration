import {Component, View} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-picker',
  directives: [],
  templateUrl: 'tiny-picker.html',
})

export class TinyPicker {
  constructor(tinyService: TinyService) {
    console.info('TinyPicker Component Mounted Successfully');
    this.tinyService = tinyService
    this.sources = [];
    this.currentSource = null;

    this.getSources();
  }

  updateSource(source) {
    console.log(this.currentFile)
    this.tinyService.updateSource(source);
    this.currentSource = source;
  }

  getSources() {
    this.tinyService.getSources()
        .subscribe(
          sources => this.sources = sources,
          err => console.log(err)
        )
  }

}
