import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient,  HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user.model';
import { IExperiencesResponse } from 'src/app/shared/models/responses/experiencesResponse.model';
import { IUserResponse } from 'src/app/shared/models/responses/userResponse.model';
import { IBooking } from 'src/app/shared/models/booking.model';
import { IBookingResponse } from 'src/app/shared/models/responses/bookingResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlApi: string = environment.urlBase;

  constructor(private httpClient: HttpClient) { }

  private isLogged: boolean = false;

  public isLoggedUser(): boolean {
    this.isLogged = localStorage.getItem('token') ? true : false;
    return this.isLogged;
  }


  public signupUser (user: IUser): Observable<IExperiencesResponse> {
    const url = `${this.urlApi}/users/signup`;
    return this.httpClient.post<IExperiencesResponse>(url, user).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public signinUser (user: IUser): Observable<IUserResponse> {
    const url = `${this.urlApi}/users/login`;
    return this.httpClient.post<IUserResponse>(url, user).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public booking (book: IBooking): Observable<IBookingResponse> {
    const url = `${this.urlApi}/booking`;
    return this.httpClient.post<IBookingResponse>(url, book
      ).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  private handlerError(error: HttpErrorResponse){
    console.error('Http error ', error);
    return throwError(`Error calling api ${error.message}`);
  }

}
