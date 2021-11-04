import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  members: any;
  item = { "_id": Number }
  token!: string;

  constructor(public local: LocalStorageService, private admin: AdminService, private router: Router) { }

  ngOnInit(): void {
    try {
      this.token = this.local.get('user').token
      this.admin.getAllMember(this.token).subscribe(
        data => {
          this.members = data;
        },
        err => {
          this.router.navigate(['/signin']);
        }
      );
    } catch (error) {
      console.log(error);
      this.router.navigate(['/signin']);
    }
  }

  

  signout() {
    this.local.clear();
    this.router.navigate(['/signin']);
  }

  deletemember(item: any) {
    console.log(item);
    this.item._id = item;
    console.log(this.item);
    try {
      this.admin.deleteMember(this.item).subscribe(
        data => {

        },
        err => {
          console.log(err);
        }
      );
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  }

  update(){
    this.router.navigate(['/update']);
  }

}
