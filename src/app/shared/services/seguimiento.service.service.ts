import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Seguimiento } from '../interfaces/seguimiento.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // Options
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  // register the user
  registerUser(seguimiento: Seguimiento): Observable<Seguimiento>{
    return this.http.post<Seguimiento>(`${environment.baseUrlAPI}/seguimientos/register`, seguimiento, this.httpOptions);
  }

  // get Seguimientos
  getSeguimientos(name: String): Observable<Seguimiento[]>{
    return this.http.get<Seguimiento[]>(`${environment.baseUrlAPI}/seguimientos/${name}`);
  }
}
