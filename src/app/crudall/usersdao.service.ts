import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment} from '../../environments/environment';
import { TokenHeadersService } from '../token-headers.service';

@Injectable({
  providedIn: 'root'
})
export class UsersdaoService {


  private usersUrl : string = environment.serverpath + '/user';

  constructor(private _http : Http, private tokenHeaderService : TokenHeadersService ) { }

  findAll(){
    let options = this.tokenHeaderService.buildHeaders();

    return this._http.get(this.usersUrl, options);
  }

  findById(userId){
    let options = this.tokenHeaderService.buildHeaders();

    return this._http.get(this.usersUrl+"/"+userId, options);
  }

  // deleteUser(userId){
  //   return this._http.delete(this.serverContextPath + "/users/" + userId);
  // }
  
  updateUser(user){
    let options = this.tokenHeaderService.buildHeaders();

    return this._http.put(this.usersUrl+"/"+user.id, user, options);
  }
  // saveUser(user){
  //   return this._http.post(this.serverContextPath+"/users", user);
  // }
  
  


}
