import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { FormSigninComponent } from './components/form-signin/form-signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin-routing.module';



@NgModule({
  declarations: [SigninComponent, FormSigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
