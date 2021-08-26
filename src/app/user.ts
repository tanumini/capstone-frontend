export  class User{
  id:number;
   firstname:string;
   lastname:string;
username:string;
   password:string;
     phoneno:number;
  dob:string;
  email:string;
    pancardno:string;
  accountno:number;
 public accounttype:string;
  public basecurrency:string;
//   let map = new Map<object, string>();
  balance:Map<string,number>;
   // balance:number;
   pin:number ;

public  setaccounttype(accounttype:string){
this.accounttype=accounttype;
}
public setbasecurrency(basecurrency:string)
{
  this.basecurrency=basecurrency;
}
}