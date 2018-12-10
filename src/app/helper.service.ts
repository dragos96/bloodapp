import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

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

  getUserType(typeId : Number){
    for(let i=0; i<this.userTypes.length; i++){
      if(this.userTypes[i].typeValue == typeId){
        return this.userTypes[i].typeName;
      }
    }
    return "UNDEFINED USER TYPE";
  }

  constructor() { }
}
