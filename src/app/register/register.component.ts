import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  submitted = false;
 
  constructor(private service :UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.service.doRegistration(this.user)
    .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
   
  }

}
