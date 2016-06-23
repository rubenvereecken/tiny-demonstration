import {Http, Headers, RequestOptions} from '@angular/http';
import {Inject} from '@angular/core';
import {Injectable} from '@angular/core';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TinyService {
  constructor(http: Http) {
    this.http = http;
    this.current = {
      source: null,
      input: '',
      asm: null,
      result: {},
      config: {
        globalLiveness: true,
        compressConstants: false,
        generateSvg: false,
      },
    };
    this.sources = null;

    this.getSources()
        .subscribe(
          sources => this.sources = sources,
          err => console.log(err)
        )
  }

  getSources() {
    return this.http
      .get('/api/tiny')
      .map(res => res.json())
      .catch(err => console.log(err));
  }

  compileSource(source, alsoExecute) {
    if (source)
      this.updateSource(source);
    // console.log(this.current.source)
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let body = {
      source: this.current.source,
      input: this.current.input,
      config: this.current.config,
      alsoExecute: alsoExecute,
    }

    return this.http
      .post('/api/tiny/compile', JSON.stringify(body), options)
      .map(res => res.json())
      // .catch(err => console.log(err))
      .subscribe(
        data => {
          this.current.result = data;
        }
      )
  }

  compileAndExecute(source) {
    return this.compileSource(source, true);
  }

  updateSource(source) {
    this.current.source = source;
  }
}
