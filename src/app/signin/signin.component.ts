import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import {
  AuthService,
  FacebookLoginProvider
  // GoogleLoginProvider
} from 'angular-6-social-login';
import { Http } from '@angular/http';
import { TokenHeadersService } from '../token-headers.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output() signInEvent: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {

  }

  constructor(private socialAuthService: AuthService, private _http: Http,
    private tokenHeaderService: TokenHeadersService) { }


    saveUserHeadersToLocalStorage(rez){
      let userHeaders = {
        "client": rez.headers.get('client'),
        "access-token": rez.headers.get('access-token'),
        "uid" : rez.headers.get('uid'),
        "token-type" : rez.headers.get('token-type'),
        "etag" : rez.headers.get('etag'),

      };
      localStorage.setItem('user_headers', JSON.stringify(userHeaders));
    }

  public socialSignIn(socialPlatform: string) {
    console.log('about to sign in ');
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
 
   

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        // ...
        let userDataJson = {
          "TOKEN": userData.token,
          "EMAIL": userData.email,
          "ID": userData.id,
          "NAME": userData.name


        };
        localStorage.setItem('fb_token', JSON.stringify(userDataJson));

        var val = Math.floor(10000000 + Math.random() * 90000000);
        console.log(val);

        let url = 'http://localhost:3000/authorization/sign_up'; // sign up URL
        let url_singIn = 'http://localhost:3000/auth/sign_in';

        let postBody = {
          "email": userDataJson.EMAIL,
          "password": "" + val,
          "password_confirmation": "" + val,
          "name": userDataJson.NAME
        };



        // let options = this.tokenHeaderService.buildHeaders();


        this._http.post(url, postBody).subscribe(rez => {
          console.log('SIGN UP');
          alert('You have signed up, your password is: ' + val);
          console.log(rez.json())
          this.saveUserHeadersToLocalStorage(rez);
          

        },
          eroare => {
            console.log('SIGN IN');
            console.log(eroare);

            let password = prompt("Please enter your password");
            postBody.password = password;
            postBody.password_confirmation = password;

            let options = this.tokenHeaderService.buildHeaders();
            this._http.post(url_singIn, postBody, options).subscribe(
              rez => {
                console.log('SIGN IN SUCCESSFUL', rez.json());
                localStorage.setItem('sign_in', JSON.stringify(rez.json()));
                console.log('user_headers are: ', rez.headers);
                console.log('access token: ', rez.headers.get('access-token'));

                // let userHeaders = {
                //   "client": rez.headers.get('client'),
                //   "access-token": rez.headers.get('access-token'),
                //   "uid" : rez.headers.get('uid'),
                //   "token-type" : rez.headers.get('token-type'),
                //   "etag" : rez.headers.get('etag'),

                // };
                // localStorage.setItem('user_headers', JSON.stringify(userHeaders));
                this.saveUserHeadersToLocalStorage(rez);

                this.signInEvent.emit(true);
              },
              err => {
                console.log('SIGN IN ERROR');
                console.log(err);
              }
            );

          });

        // localStorage.setItem('fb_token', JSON.stringify(userDataJson));
        // console.log

      }
    );
  }

}
