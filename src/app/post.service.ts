import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Ipost } from './ipost.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';


@Injectable()
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private httpClient: HttpClient) { }

  getPost(): Observable<number> {
    return this.httpClient.get(this.url).pluck('body');
  }

  getPost2(): Observable<number> {
    return this.httpClient.get(this.url).pluck('body');
  }

}
