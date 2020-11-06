import { IBooking } from './../booking.model';

export interface IBookingResponse {
    response: IBooking;
    status: number;
}