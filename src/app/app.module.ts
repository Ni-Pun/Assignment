import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { NameComponent } from './name/name.component';
import { AddressComponent } from './address/address.component';
import { EmailComponent } from './email/email.component';
import { MobileComponent } from './mobile/mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    NameComponent,
    AddressComponent,
    EmailComponent,
    MobileComponent,
    CreateUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
