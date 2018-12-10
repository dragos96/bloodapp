import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from '../../environments/environment';
import { TokenHeadersService } from '../token-headers.service';


@Injectable({
  providedIn: 'root'
})
export class CenterdaoService {

  
  private urlCenter = environment.serverpath+'/center';

  constructor(private _http : Http, private tokenHeaderService : TokenHeadersService ) { }


  findAll(){
    let options = this.tokenHeaderService.buildHeaders();
    return this._http.get(this.urlCenter, options);
  }
}
