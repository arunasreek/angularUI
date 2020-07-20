import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IEmployeePost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from '../models';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }
    getCustomerList(cust_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetCustomerList?${cust_id}`).pipe(map((data: any) => {
            return data;
        }));
      
    }
   
    
}