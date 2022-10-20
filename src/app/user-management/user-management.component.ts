import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  public user_pic = "assets/Images/pic1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
