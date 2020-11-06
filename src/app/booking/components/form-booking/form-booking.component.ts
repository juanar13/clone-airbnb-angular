import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IBookingResponse } from 'src/app/shared/models/responses/bookingResponse.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent implements OnInit {

  public formGroup: FormGroup;

  public id: string;
  public booked: IBookingResponse;
  public errorHandler: string;
  
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getParams();
    this.formInit();
    
  }

  private getParams(): void {
    this.route.params.subscribe(params => {
      this.id = String(params._id);
    });
  }

  private formInit(): void {
    this.formGroup = this.formBuilder.group({
      initialDate: ['', Validators.required],
      finalDate: ['', [Validators.required]],
      comments: ['', Validators.required],
      id: [this.id]
    },{
      validators: this.validateDateRange()
    });
  }

  private validateDateRange() {
    return (formGroup: FormGroup) => {
      const controlInitialDate = formGroup.controls['initialDate']
      const controlFinalDate = formGroup.controls['finalDate']
      if(new Date(controlInitialDate.value) > new Date(controlFinalDate.value)){
        return  controlFinalDate.setErrors({ mustGreaterThan: true })
      }
    }

  }


  public book(): void {
      const data = this.formGroup.value;
      this.userService.booking(data).subscribe(
        response => {
          if(response.status === 1){
            this.booked = response;
            console.log('su reserva: ', this.booked);
            this.router.navigate(['/home']);
      }else {
        this.errorHandler = 'Reserva no realizada';
      }
    });    
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
    if (errors.dateError) {
      errorsMessage += errors.dateError;
    }
    if (errors.mustGreaterThan) {
      errorsMessage += `La fecha debe ser mayor que la fecha inicial`;
    }
    return errorsMessage;
  }


}
