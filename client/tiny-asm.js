import {Component, ViewChild} from '@angular/core';
import {Inject} from '@angular/core';
import {TinyService} from 'tiny';

@Component({
  selector: 'tiny-asm',
  directives: [],
  queries: {
    asmElement: new ViewChild('asm'),
    asmHiddenElement: new ViewChild('asmhidden')
  },
  template: `
<pre class="code-wrapper"><code #asm class="nasm"></code></pre>
<pre class="hidden"><code #asmhidden>{{current.result.asm}}</code></pre>
  `
})

export class TinyAsm {
  // @ViewChild('code') asmElement;

  constructor(tinyService: TinyService) {
    this.tinyService = tinyService;
    this.current = tinyService.current;
  }

  ngAfterViewInit() {
    console.log(this.asmElement)
  }
  ngAfterViewChecked() {
    this.asmElement.nativeElement.textContent = this.asmHiddenElement.nativeElement.textContent;
    hljs.highlightBlock(this.asmElement.nativeElement);
  }
}

