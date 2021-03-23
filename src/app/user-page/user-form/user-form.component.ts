import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup = this.fb.group(
    {
      nom: ['tintin', [Validators.required, Validators.minLength(3)]],
      prenom: ['milou', Validators.minLength(3)]
    }
  );

  users: User[] = [];

  truc: any;

  constructor(private fb: FormBuilder, private userApi: UserService) { }

  ngOnInit(): void {
  }

  ajouterUser() {
    this.userApi.postUser(this.form.value);
    this.users.push(this.form.value);
    console.log(this.users);
  }

  changeTruc() {
    this.truc = "poulet";
  }

}
