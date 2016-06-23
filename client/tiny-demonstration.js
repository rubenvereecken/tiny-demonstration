import {Component, View} from '@angular/core';
import {TinyPicker} from 'tiny-picker';
import {TinySource} from 'tiny-source';
import {TinyAsm} from 'tiny-asm';
import {TinyService} from 'tiny';
import {TinyTools} from 'tiny-tools';
import {TinyOutput} from 'tiny-output';
import {TinyInput} from 'tiny-input';
import {TinyConfig} from 'tiny-config';
import {TinySVG} from 'tiny-svg';

// console.log (TinyPicker, TinySource, TinyAsm, TinyTools, TinyOutput);

@Component({
  providers: [TinyService],
  selector: 'tiny-demonstration',
  directives: [TinyPicker, TinySource, TinyAsm, TinyTools, TinyOutput, TinyInput,
               TinyConfig, TinySVG],
  templateUrl: 'tiny-demonstration.html'
})

export class TinyDemonstration {

  constructor() {
    console.info('TinyDemonstration Component Mounted Successfully');
    console.log(arguments)
  }
}

