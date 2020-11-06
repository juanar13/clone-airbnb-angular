import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { IUserResponse } from 'src/app/shared/models/responses/userResponse.model';
import { IUser } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-signin',
  templateUrl: './form-signin.component.html',
  styleUrls: ['./form-signin.component.scss']
})
export class FormSigninComponent implements OnInit {

  public formGroup: FormGroup;
  public register: IUserResponse;

  constructor(private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  public loggin(): void {
    const data = this.formGroup.value;
    this.usersService.signinUser(data).subscribe(
      response => {
        if(response.status === 1){
          localStorage.setItem('token', response.token);
          this.register = response;
          this.router.navigate(['/home']);
        }else{
          console.log('clave incorrecta');
        }
    });
  }

}
