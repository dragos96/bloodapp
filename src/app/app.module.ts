import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import {
  SocialLoginModule,
  AuthServiceConfig,
  // GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { TestComponent } from './test/test.component';
import { SigninComponent } from './signin/signin.component';
import { CrudallModule } from './crudall/crudall.module';
import { CenterDetailsComponent } from './center-details/center-details.component';
import { FormularComponent } from './formular/formular.component';
import { FormsModule } from '@angular/forms';



// Configs 
export function getAuthServiceConfigs() {
  console.log('getting config');
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("739767856363276")  
        }
        // {
        //   id: GoogleLoginProvider.PROVIDER_ID,
        //   provider: new GoogleLoginProvider("Your-Google-Client-Id")
        // },
     
      ]
  );
  return config;
}

const appRoutes: Routes = [
  
  { path: '',
  component: AppComponent
  },
  { path: 'center/details/:id',
  component: CenterDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SigninComponent,
    FormularComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SocialLoginModule,
    CrudallModule,
    FormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
