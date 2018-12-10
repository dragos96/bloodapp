import { Component, OnInit } from '@angular/core';
import { BlooddaoService } from '../blooddao.service';

@Component({
  selector: 'app-blood',
  templateUrl: './blood.component.html',
  styleUrls: ['./blood.component.css']
})
export class BloodComponent implements OnInit {

  bloodDonations : any[] = [];

  constructor(private serviceBlood : BlooddaoService) { }

  refresh(){
    this.serviceBlood.findAllBloodDonations().subscribe(
      res => {
        console.log('BLOOD OK', res.json());
        this.bloodDonations = res.json();
      },
      err => {
        console.log('BLOOD FAIL');
        console.log(err);
      }
    );
  }

  ngOnInit() {
   this.refresh();
  }

}
