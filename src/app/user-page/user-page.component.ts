import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users: User[] = [];

poulet: boolean = true;

user: any = this.users[0];

  constructor(private userApi: UserService) { }

  ngOnInit(): void {
    this.userApi.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(users);
    }, (err: any) => {
      console.error(err);
    } );
  }

  changePoulet() {
    this.poulet = !this.poulet;
  }

}
