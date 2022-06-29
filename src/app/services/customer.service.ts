import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient : HttpClient) { }

  public getCustomers() : Observable<Array<Customer>> {
    return this.httpClient.get<Array<Customer>>("http://localhost:8080/v1/customers");
  }
}
