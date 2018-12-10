import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from '../../environments/environment';
import { TokenHeadersService } from '../token-headers.service';

@Injectable({
  providedIn: 'root'
})
export class BlooddaoService {

  private urlBlood = environment.serverpath+'/blood';
  private urlDonation = environment.serverpath+'/donation';

  constructor(private _http : Http, private tokenHeaderService : TokenHeadersService ) { }

  // blood requests
  findAllBloodRequests(){
    let options = this.tokenHeaderService.buildHeaders();
    return this._http.get(this.urlBlood, options);
  }



  // blood donations

  findAllBloodDonations(){
    let options = this.tokenHeaderService.buildHeaders();
    return this._http.get(this.urlDonation, options);
  }

  save(donation){
    let options = this.tokenHeaderService.buildHeaders();
    return this._http.post(this.urlDonation, donation, options);
  }

  saveRequest(donationRequest){
    let options = this.tokenHeaderService.buildHeaders();
    return this._http.post(this.urlBlood, donationRequest, options);
  }
}
