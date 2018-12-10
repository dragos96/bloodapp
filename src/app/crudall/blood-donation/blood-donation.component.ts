import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BlooddaoService } from '../blooddao.service';
import { CenterdaoService } from '../centerdao.service';

@Component({
  selector: 'app-blood-donation',
  templateUrl: './blood-donation.component.html',
  styleUrls: ['./blood-donation.component.css']
})
export class BloodDonationComponent implements OnInit {

  @Input() userObject : any;
  @Output() donationEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() donationRequestEvent: EventEmitter<boolean> = new EventEmitter();

  bloodDonations : any[] = [];
  bloodRequests : any[] = [];

  // BLOOD DONATION
  newDonation : any = {
    center_id : 0,
    blood_type: '',
    details : '',
    quantity : 0
  };

  // BLOOD REQUEST
  blood_request : any = {
    center_id : 0,
    blood_type: '',
    details : '',
    status :  false,
    user_id : 0
  };

  // blood_type: "AB4"
  // center_id: 1
  // details: "Quia eum rerum unde."
  // status: false
  // updated_at: "2018-12-03T11:28:44.550Z"
  // user_id: 3


  bloodTypes: string[] = ['A', 'B', 'AB4'];
  centers : any[] = [];


  constructor(private dao : BlooddaoService, private daoCenter : CenterdaoService) { }


  refresh(){
    this.dao.findAllBloodDonations().subscribe(
      res => {
        console.log('BLOOD DONATIONS OK', res.json());
        this.bloodDonations = res.json();
      },
      err => {
        console.log('BLOOD DONATIONS FAIL');
        console.log(err);
      }
    );

    this.dao.findAllBloodRequests().subscribe(
      res => {
        console.log('BLOOD REQUESTS OK', res.json());
        this.bloodRequests = res.json();
      },
      err => {
        console.log('BLOOD REQUESTS FAIL');
        console.log(err);
      }
    );
  }


  ngOnInit() {

    this.refresh();

    this.daoCenter.findAll().subscribe(
      rez => {
        this.centers = rez.json();
      }
    );
  }

  saveNewDonation(){
    this.newDonation.status = false; // 
    let donationBody = {
      donation : this.newDonation
    };
    this.dao.save(donationBody).subscribe(
      rez => {
        console.log('donation saved!!', rez.json());
        this.donationEvent.emit(true);
        this.refresh();
      },
      err => {
        console.log('donation save failed', err);
      }
    );
  }

  saveNewDonationRequest(){
    console.log('saving request', this.blood_request);
    this.blood_request.status = false; // 
    let brbody = {
      blood_request : this.blood_request
    };
    this.dao.saveRequest(brbody).subscribe(
      rez => {
        console.log('donation request saved!!', rez.json());
        this.donationRequestEvent.emit(true);
        this.refresh();
      },
      err => {
        console.log('donation request save failed', err);
      }
    );
  }

    // BLOOD REQUEST
    // blood_request : any = {
    //   center_id : 0,
    //   blood_type: '',
    //   details : '',
    //   quantity : 0,
    //   status :  false,
    //   user_id : 0
    // };
  

}
