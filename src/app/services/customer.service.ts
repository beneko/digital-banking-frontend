import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient : HttpClient) { }

  public getCustomers() : Observable<Array<Customer>> {
    return this.httpClient.get<Array<Customer>>(environment.APIROOT + "/customers");
  }

  public searchCustomers(keyword: string) : Observable<Array<Customer>> {
    return this.httpClient.get<Array<Customer>>(environment.APIROOT + "/customers/search?keyword=" + keyword);
  }
}
