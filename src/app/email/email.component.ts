import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Email } from '../models/email';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailAddress : Email;

  public form = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email])
  });
  
  constructor(private service : UserServicesService, private route: Router) { 
    this.emailAddress = this.service.email;
  }

  ngOnInit(): void {
  }

  public onNext() {
    console.log(this.form.value);
    
    this.service.newUserDetails.email = this.form.value.email;
    this.route.navigate(["/create-user/phone"]);
  }

}
