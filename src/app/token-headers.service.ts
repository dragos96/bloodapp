import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class TokenHeadersService {

  constructor() { }

  buildHeaders(){
    let fb_tokenJson = JSON.parse(localStorage.getItem('fb_token'));

    let userHeaders = JSON.parse(localStorage.getItem('user_headers'));
   
    console.log('BUILDING HEADERS: ', userHeaders);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('access-token', `${userHeaders['access-token']}`);
    headers.append('expiry', `1544795019`); // TODO: check if necessary
    headers.append('token-type', `Bearer`);
    headers.append('uid', `${userHeaders['uid']}`);
    headers.append('etag', `${userHeaders['etag']}`);
    headers.append('client', `${userHeaders['client']}`);
    console.log('headers are ready: ', headers);

    let options = new RequestOptions({ headers: headers });
    return options;

  }
}
