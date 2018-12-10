import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BloodApp';
  userSignedIn : boolean = false;
  userObject = {
    "id" : 0,
    "email" : '',
    "user_type": 0, 
    "user_type_name": '',
    "name" : ''
  };

  vizualizareFormular: boolean = false;
  
 

 

  constructor(private _http: Http, private _helper : HelperService) {

  }
  ngOnInit(): void {
    //this._http.get('http://localhost:3000/authorization/sign_up').subscribe(rez =>{
    // console.log('rezultat:', rez.json());
    // });
  }

  getUserSignedIn() {
    console.log('EVALUATING SIGNED IN');
    if (localStorage.getItem('sign_in') != null) {
      console.log('user is signed in check validated');
      this.userSignedIn = true;
      let jsonSI = JSON.parse(localStorage.getItem('sign_in'));
      console.log('json si: ', jsonSI);
      this.userObject.email = jsonSI.data.email;
      this.userObject.id = jsonSI.data.id;
      this.userObject.name = jsonSI.data.name;
      this.userObject.user_type = jsonSI.data.user_type;
      this.userObject.user_type_name = this._helper.getUserType(this.userObject.user_type);
      //  {"data":{"id":27,"email":"dragosgrig70@yahoo.com","provider":"email","uid":"dragosgrig70@yahoo.com","allow_password_change":false,"name":"Dragos Grigore","nickname":null,"image":null,"blood_type":null,"user_type":1,"last_donation":null}}
      return true;
    }
    return false;

  }

  newDonationEvent(){
    console.log('donation has been made');
  }

  vizualizareFormularToggle(){
    this.vizualizareFormular = ! this.vizualizareFormular;
  }

}
