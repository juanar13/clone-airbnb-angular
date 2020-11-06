import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IExperiencesResponse } from 'src/app/shared/models/responses/experiencesResponse.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private urlApi: string = environment.urlBase;

  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    console.error('Http error ', error);
    return throwError(`Error calling api ${error.message}`);
  }

  public getExperiences (): Observable<IExperiencesResponse> {
    const url = `${this.urlApi}/experiences`;
    return this.httpClient.get<IExperiencesResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getTop5 ():  Observable<IExperiencesResponse> {
    const url = `${this.urlApi}/experiences/top5`;
    return this.httpClient.get<IExperiencesResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceById (id: string): Observable<IExperiencesResponse> {
    const url = `${this.urlApi}/experiences/detail/${id}`
    return this.httpClient.get<IExperiencesResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}
