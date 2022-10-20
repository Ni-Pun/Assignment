import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Phone } from '../models/phone';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobileNumber : Phone;

  public form = new FormGroup({
    "phoneNumber": new FormControl("", [Validators.required, Validators.pattern('[0-9]{10}')]),
  });
  
  constructor(private service : UserServicesService, private route: Router) { 
    this.mobileNumber = this.service.mobile;
  }

  ngOnInit(): void {
  }

  public onNext() {
    console.log("Mobile Number" +this.form.value);
    
    this.service.newUserDetails.phone = this.form.value.phoneNumber;
    this.route.navigate(["/create-user/address"]);
  }

}
