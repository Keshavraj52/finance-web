import { Injectable } from '@angular/core';
import { application } from 'datatype';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }

  application(data:application){
    return this.http.post('http://localhost:3000/application',data)
    }
}
