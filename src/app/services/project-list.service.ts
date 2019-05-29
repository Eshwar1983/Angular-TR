import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class ProjectListService {

  constructor( private _http: Http ) { }

  get feachProjectData(){
    return this._http.get('./assets/data/project-list.json');
    // const url = './assets/data/project-list.json';
    // const type = 'GET';
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'params': { url, _type: type }
    // });
    // const options = new RequestOptions({ headers: headers, withCredentials: true });
    // return this._http.get(url, options);
  }

}
