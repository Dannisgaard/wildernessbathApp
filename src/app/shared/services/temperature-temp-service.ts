import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TemperatureCurrent } from '../models/temperature-current';


@Injectable({
  providedIn: 'root'
})
export class TemperatureTempService {

  private apiRoot = "https://node-red.dannisgaard.dk/api/wildernessbath"

  constructor(
    private http: HttpClient,
  ) { }



  public getCurrentTemperature(): Observable<TemperatureCurrent> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };

    return this.http.get<any>(`${this.apiRoot}/temp`, options);
  }
}