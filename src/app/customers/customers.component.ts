import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  customers : any;

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/v1/customers").subscribe(data => {
      this.customers = data;
    })
  }

}
