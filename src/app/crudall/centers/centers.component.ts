import { Component, OnInit } from '@angular/core';
import { CenterdaoService } from '../centerdao.service';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {

  centers : any[] = [];
  constructor(private dao : CenterdaoService) { }

  ngOnInit() {
    this.dao.findAll().subscribe(rez => {
      this.centers = rez.json();
      console.log(this.centers);
    });
  }

  viewDetails(center){
    console.log('viewing details for: ', center);
    
  }
}
