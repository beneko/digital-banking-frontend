import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers! : Observable<Array<Customer>>;
  errorMessage! : string;

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers().pipe(
      catchError(
        err => {
          this.errorMessage = err.message;
          return throwError(() => err);
        }
      )
    );
  }

}
