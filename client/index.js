import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import 'rxjs/Rx';
import 'rxjs/observable/PromiseObservable';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {TinyDemonstration} from 'tiny-demonstration';
import 'zone.js/zone';
// import 'zone.js/long-stack-trace-zone';
console.log(Component)

@Component({
  selector: 'main',
  directives: [TinyDemonstration],
  template: `
    <tiny-demonstration></tiny-demonstration>
  `
})

class Main {

}
console.log("WHOOP")

bootstrap(Main, [HTTP_PROVIDERS]);
