import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EmailComponent } from './email/email.component';
import { MobileComponent } from './mobile/mobile.component';
import { NameComponent } from './name/name.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path : "", component : UserManagementComponent},
  {
    path : "create-user", 
    component: CreateUserComponent,
    children : [
      {path : "", component : NameComponent},
      {path : "email", component : EmailComponent },
      {path : "phone", component : MobileComponent},
      {path : "address", component: AddressComponent}      
    ]
  },
  {path : "user-list", component : UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
