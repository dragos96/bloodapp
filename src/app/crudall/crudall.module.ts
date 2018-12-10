import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { HttpModule } from '@angular/http';
import { BloodComponent } from './blood/blood.component';
import { CentersComponent } from './centers/centers.component';
import { BloodDonationComponent } from './blood-donation/blood-donation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports : [
    UsersAddComponent, UsersComponent,
     UsersUpdateComponent, BloodComponent,
      CentersComponent, BloodDonationComponent
  ],
  declarations: [UsersComponent, UsersAddComponent, UsersUpdateComponent, 
    BloodComponent, CentersComponent, BloodDonationComponent]
})
export class CrudallModule { }
