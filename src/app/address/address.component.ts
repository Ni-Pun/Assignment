import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { Router} from '@angular/router';
import { UserServicesService } from '../user-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address : Address;

  public form = new FormGroup({
    // "firstName": new FormControl("", Validators.required),
    "address": new FormControl("", Validators.required),
  });

  constructor( private service : UserServicesService, private route: Router) {
    this.address = this.service.fulladdress;
   }

  ngOnInit(): void {
    
  }

  public onSubmit() {
    console.log(this.form.value)
    this.service.newUserDetails.address = this.form.value.address
    this.service.userData();
    this.route.navigate(["/"]);
  }

}
