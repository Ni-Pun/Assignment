import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public allUsersList : any = [];
  public active_accordian_index: number = -1;

  constructor(private service : UserServicesService, private route: Router) {
    this.allUsersList = this.service.allUserDetails;
   }

  ngOnInit(): void {
    // this.allUsersList = [
    //   {
    //     firstName : "Raj",
    //     lastName : "Kumar",
    //     email : "rajkumar@gmail.com",
    //     phone : "9978873223",
    //     address : "Janak Puri"
    //   },
    //   {
    //     firstName : "Ram",
    //     lastName : "Kumar",
    //     email : "ramkumar@gmail.com",
    //     phone : "9888873223",
    //     address : "Janak Mahel"
    //   },
    //   {
    //     firstName : "Sarovar",
    //     lastName : "Jharna",
    //     email : "sarjhar@gmail.com",
    //     phone : "9945673223",
    //     address : "Basant Puri"
    //   }
    // ]
  }

  public deleteUser(_userIndex : any) {
    // console.log(_user);
    this.allUsersList.splice(_userIndex, 1);
    console.log(this.allUsersList);
    
    
  }

}
