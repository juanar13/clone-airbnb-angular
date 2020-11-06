import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BookingRoutingModule } from './booking-routing.module';
import { FormBookingComponent } from './components/form-booking/form-booking.component';



@NgModule({
  declarations: [BookingComponent, FormBookingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
