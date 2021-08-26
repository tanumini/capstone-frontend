import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [  {path:"",redirectTo:"register",pathMatch:"full"},
{path:"register",component:RegisterComponent},
{path:"account",component:UserAccountComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
