import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  submitted = false;
  fetchedUser: User;
  pan:string;
accounttype:any;
basecurrency:any;
  //  accounttype:string="";
  // basecurrency:string="";
  constructor(private service :UserService, private router:Router) { }

  ngOnInit(): void {
    

  }
  onSubmit() {
    this.submitted = true;
    this. pan= this.service.getpan();
    this.service.list().subscribe(res=>{
         console.log(res);
         res.forEach(user => {
        
            if(user.pancardno==this.pan){
              this.fetchedUser=user;
             
              console.log(this.fetchedUser.email);
               console.log(typeof(JSON.stringify(this.accounttype)));
            }
          })
         
        })

       this.fetchedUser.accounttype=JSON.stringify(this.accounttype);
       this.fetchedUser.basecurrency=JSON.stringify(this.basecurrency);
      this.service.updateaccount(this.fetchedUser.id,this.fetchedUser)
    .subscribe(data => console.log(data), error => console.log(error));
   this. accounttype="";
    this.basecurrency="";
  
    this.router.navigate(['register']);
 
    }
    
  }
    
//     const filtered =  res.filter((obj:User) => {
//         return (obj.pancardno === this.pan);

//     });
//     this.fetchedUser = filtered[0];
//    console.log(this.fetchedUser.accounttype);
//   },error=>console.log(error));
//   console.log(typeof(this.fetchedUser.id));
// this.service.updateaccount2(this.fetchedUser.id,{"accounttype":this.accounttype}) .subscribe(data => console.log(data), error => console.log(error));
 


  
  
  



