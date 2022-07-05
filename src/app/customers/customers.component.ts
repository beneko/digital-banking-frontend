import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers! : Observable<Array<Customer>>;
  errorMessage! : string;
  searchFormGroup : FormGroup | undefined;

  constructor(private customerService : CustomerService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group({
      keyword : this.formBuilder.control("")
    });
    this.handleSearchCustomers();
  }
  handleSearchCustomers(){
    let keyword = this.searchFormGroup?.value.keyword;
    this.customers = this.customerService.searchCustomers(keyword).pipe(
      catchError(
        err => {
          this.errorMessage = err.message;
          return throwError(() => err);
        }
      )
    );
  }

}
