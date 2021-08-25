import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User=new User("","","","",0,"","","",Math.random()*(10000-10+1)+10,0,0);
//   user={
    
//     firstname:"",
//     lastname:"",
//  username:"",
//     password:"",
//       phoneno:0,
//    dob:"",
//    email:"",
//      pancardno:"",
//    accountno:"Math.random()*(10000-10+1)+10",
//     balance:0,
//     pin:0
//   }
  constructor(private service :UserService) { }

  ngOnInit(): void {
  }
  public registerNow(){
 
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data:any)=>console.log(data));
      }
}
