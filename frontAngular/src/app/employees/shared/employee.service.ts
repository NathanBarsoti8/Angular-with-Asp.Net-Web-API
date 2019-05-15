import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/internal/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;

  constructor(private http: Http) { }

  postEmployee(emp: Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions})
    return this.http.post('url', body, requestOptions).map(x => x.json());
  }
}
