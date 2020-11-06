import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IExperience } from 'src/app/shared/models/experience.model';
import { UsersService } from 'src/app/services/users/users.service';
import { IUser } from 'src/app/shared/models/user.model';
import { IExperiencesResponse } from 'src/app/shared/models/responses/experiencesResponse.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public formGroup: FormGroup;
  public register: IExperiencesResponse;

  constructor(private formBuilder: FormBuilder,
    private usersService: UsersService
    ) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit():void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.maxLength(16), this.validatePassword ]]
    });
  }

  private validatePassword ( control: AbstractControl){
    const password = control.value;
    let error = null;
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!er.test(password)) {
      error = { customError: 'Debes tener almenos una mayúscula, un numero y tener almenos 8 caracteres' }
    }
    return error;
  }

  public getError (controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors);
    }
    return error;
  }

  private errorMapping (errors: any): string {
    console.log('errors', errors);
    let errorsMessage = '';
    if (errors.required) {
      errorsMessage += 'Campo obligatorio. ';
    }
    if (errors.customError) {
      errorsMessage += errors.customError;
    }
    if (errors.maxlenght) {
      errorsMessage += `La longitud máxima debe ser ${errors.maxlength}`;
    }
    if (errors.email) {
      errorsMessage += 'Debes ingresar un correo válido';
    }
    return errorsMessage;
  }

  public signUp(): void {
    const data = this.formGroup.value;
    this.usersService.signupUser(data).subscribe(
      response => {
      this.register = response;
      console.log('registro de usuario nuevo: ', this.register);
    });
  }

}
