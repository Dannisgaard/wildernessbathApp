import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Temperature } from '../models/temperature';


@Injectable({
  providedIn: 'root'
})
export class TemperatureLogService {

  private apiRoot = "https://node-red.dannisgaard.dk/api/wildernessbath"

  constructor(
    private http: HttpClient,
  ) { }



  public getTemperatureLog(): Observable<Temperature[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };

    return this.http.get<any>(`${this.apiRoot}/log`, options);
  }
}