import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

import { IcustomerPost } from 'src/app/models/customer.model';
import { IsupplierPost } from 'src/app/models/supplier.model';

import { IEmployeePost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from '../models';


@Injectable()
export class CustomerService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }
    getCustomerList(cust_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Customer/GetCustomer?id=${cust_id}`).pipe(map((data: any) => {
            return data;
        }));
      
    }
   

    getStatelist(country_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getstate?${country_id}`).pipe(map((data: any) => {
            return data;
        }));
        
    }
   

    SetCoustomer(postData:IcustomerPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/SetCoustomer`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    SetSupplier(postData:IsupplierPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/SetSupplier`,postData).pipe(map((res: any) => {
            return res;
        }));
    }


    getSupplierList(supp_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Supplier/GetSupplierList?id=${supp_id}`).pipe(map((data: any) => {
            return data;
        }));
      
    }

}