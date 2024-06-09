import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import {IPRPost} from 'src/app/models/procurement.model';
import { UoMmodel } from 'src/app/models/UOM.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class UOMService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
    }

    getUOMList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/UOM/GetUOM`).pipe(map((data: any) => {
            return data;
        }));
    }
    onSubmitUOM(jobClass:UoMmodel):Observable<any>{
        return this.http.post<any>(`${this.config.apiEndpoint}/UOM`,jobClass);
    }
   
    GetMaterialItemdetbyid(){
        return this.http.get<any>(`${this.config.apiEndpoint}/procure/pc/GetMaterialItemdetbyid`).pipe(map((data: any) => {
            return data;
        }));
    }
    getbranchlist(b_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getbranchlist?b_id=${b_id}`).pipe(map((data: any) => {
            return data;
        }));
      
    }
    GetEmployeedetList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeedetList`).pipe(map((data: any) => {
            return data;
        }));
      
    }
    getCustomerList(cust_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetCustomerList?${cust_id}`).pipe(map((data: any) => {
            return data;
        }));
      
    }
   
    GetOrganizationList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetOrganizationList`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetprojctList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetprojctList`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetMaterialItemdet() {
        return this.http.get<any>(`${this.config.apiEndpoint}/procure/pc/GetMaterialItemdet`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetSupplierList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/procure/pc/GetSupplierList`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetPurchaseReqdet() {
        return this.http.get<any>(`${this.config.apiEndpoint}/procure/pc/GetPurchaseReqdet`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetPurQuatdet() {
        return this.http.get<any>(`${this.config.apiEndpoint}/procure/pc/GetPurQuatdet`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetPurchaseOrderdet() {
        return this.http.get<any>(`${this.config.apiEndpoint}/procure/pc/GetPurchaseOrderdet`).pipe(map((data: any) => {
            return data;
        }));
    } 
    SetPurchaseReq(postData:IPRPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/procure/pc/SetPurchaseReq`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    
}