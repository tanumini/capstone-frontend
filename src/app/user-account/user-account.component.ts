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
  timeoutfunc1()
  {
    
    this.service.updateaccount(this.fetchedUser.id,this.fetchedUser)
    .subscribe(data => console.log(data), error => console.log(error));
   this. accounttype="";
    this.basecurrency="";
  
    this.router.navigate(['register']);
  }
  timeoutfunc()
  {
    this.fetchedUser.accounttype=this.accounttype;
            this.fetchedUser.basecurrency=this.basecurrency;
            console.log(this.fetchedUser.id);

            setTimeout(() =>{
              this.timeoutfunc1();
          }, 1000);
   
  }
  onSubmit() {
    this.submitted = true;
    this. pan= this.service.getpan();
    this.service.list().subscribe(res=>{
         console.log(res);
         res.forEach(user => {
        
            if(user.pancardno==this.pan){
              this.fetchedUser=user;
             
       console.log(this.fetchedUser);
       console.log(JSON.stringify(this.accounttype));
            }
            
        
         
        })
        
      })
      setTimeout(() =>{
        this.timeoutfunc();
    }, 100);
    
 
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
 


  
  
  



