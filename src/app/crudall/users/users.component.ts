import { Component, OnInit } from '@angular/core';
import { UsersdaoService } from '../usersdao.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any[] = [];



  userTypes : any[] = [
    {
      typeName : "ADMIN",
      typeValue : 4
    },
    {
      typeName : "MEDIC",
      typeValue : 3
    },
    {
      typeName : "PERSONAL",
      typeValue : 2
    },
    {
      typeName : "DONATOR",
      typeValue : 1
    }

  ];

  constructor(private _dao : UsersdaoService) { }

  ngOnInit() {
   this.loadUsers();
  }

  loadUsers(){
    this._dao.findAll().subscribe(results => {
      console.log('users loaded', results.json());
      this.users = results.json();
    });
  }

  // deleteEntity(user){
  //   this._dao.deleteUser(user.id).subscribe(rez=>{
  //     console.log('am sters user-ul, ar trebui sa reincarcam lista');
  //     console.log(rez.json());
  //     this.loadUsers();

  //   });
  // }

  updateUserType(user, typeValue){
    console.log('promoting user: ', user);
    console.log('to user type: ' + typeValue);
    user.user_type = typeValue;
    this._dao.updateUser(user).subscribe(
      rez => {
        console.log('OK', rez);
      },
      err => {
        console.log('FAIL', err);
      }
    );
  }

}
