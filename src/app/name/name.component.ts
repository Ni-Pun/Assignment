import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Name } from '../models/name';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name : Name;

  public form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
  });

  constructor( private service : UserServicesService, private route: Router) {
    this.name = this.service.name;
   }

  ngOnInit(): void {
  }

  public onNext() {
    console.log("Name" + this.form.value);
    
    this.service.newUserDetails.firstName = this.form.value.firstName;
    this.service.newUserDetails.lastName = this.form.value.lastName;

    this.route.navigate(["/create-user/email"]);
  }

}
