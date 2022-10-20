import { Injectable } from '@angular/core';
import { Address } from './models/address';
import { Email } from './models/email';
import { Name } from './models/name';
import { Phone } from './models/phone';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  name : Name;
  email : Email;
  fulladdress : Address;
  mobile:Phone;
  public newUserDetails : any = {}
  public allUserDetails : any = [
    {
      firstName : "Raj",
      lastName : "Kumar",
      email : "rajkumar@gmail.com",
      phone : "9978873223",
      address : "Janak Puri"
    },
    {
      firstName : "Ram",
      lastName : "Kumar",
      email : "ramkumar@gmail.com",
      phone : "9888873223",
      address : "Janak Mahel"
    },
    {
      firstName : "Sarovar",
      lastName : "Jharna",
      email : "sarjhar@gmail.com",
      phone : "9945673223",
      address : "Basant Puri"
    }
  ]

  constructor() {
    this.name = new Name();
    this.email = new Email();
    this.fulladdress = new Address();
    this.mobile = new Phone();
    this.newUserDetails = {
      firstName : "",
      lastName : "",
      email : "",
      phone : "",
      address : ""
    }
   }

   public userData() {
    
    // this.newUserDetails = {
    //   firstName : this.name.firstName,
    //   lastName : this.name.lastName,
    //   email : this.email.email,
    //   phone : this.mobile.mobile,
    //   address : this.fulladdress.fulladdress
    // }
    this.allUserDetails.push(this.newUserDetails);

    console.log(this.allUserDetails);
    
   }
}
