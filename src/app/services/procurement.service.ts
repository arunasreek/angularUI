import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import {IPRPost, IPRQua, ISupplierInvoice} from 'src/app/models/procurement.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProcurementService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    GetEmployeeriD() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Employee/GetAllEmpList`).pipe(map((data: any) => {
            return data;
        }));
    }
    GetStockItems() {
        return this.http.get<any>(`${this.config.apiEndpoint}/ItemGroup/GetStockItems`).pipe(map((data: any) => {
            return data;
        }));
    }
   
    GetMaterialItemdetbyid(){
        return this.http.get<any>(`${this.config.apiEndpoint}/procure/pc/GetMaterialItemdetbyid`).pipe(map((data: any) => {
            return data;
        }));
    }
    getbranchlist() {
        return this.http.get<any>(`${this.config.apiEndpoint}/EmployeeBranch/GetAllEmpBranch`).pipe(map((data: any) => {
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
        return this.http.get<any>(`${this.config.apiEndpoint}/OrganizationUnit/GetAllOrganization`).pipe(map((data: any) => {
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
    GetSupplierList(id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Supplier/GetSupplierList?id=${id}`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetPurchaseReqdet() {
        return this.http.get<any>(`${this.config.apiEndpoint}/PurchaseReq/GetPurchaseReqdet`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetPurQuatdet() {
        return this.http.get<any>(`${this.config.apiEndpoint}/PurchaseQuatation/GetPurQuatdet`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetPurQuatdets() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Purchase/GetPurchaseQuation`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetPurchaseOrderdet() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Purchase/GetPurchaseOrder`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetPurchaseInvoice() {
        return this.http.get<any>(`${this.config.apiEndpoint}/PurchaseInvoice/GetPurchaseInvoice`).pipe(map((data: any) => {
            return data;
        }));
    } 

    GetPurchaseOdrById(id:any) {
        return this.http.get<any>(`${this.config.apiEndpoint}/PurchaseInvoice/GetOrderById?orderId=${id}`).pipe(map((data: any) => {
            return data;
        }));
    } 
    // SetPurchaseReq(postData:IPRPost):Observable<any>{
    //     // return this.http.post<any>(`${this.config.apiEndpoint}/PurchaseReq`, postData).pipe(map((res: any) => {
    //     //     return res;
    //     // }));
    //     return this.http.post<any>(`${this.config.apiEndpoint}/PurchaseReq`,postData);
    // }

    SetPurchaseReq(postData:IPRPost){
        console.log(postData);
        return this.http.post<any>(`${this.config.apiEndpoint}/PurchaseReq`,postData);
        
    }
    SetSupplierInvoice(postData:ISupplierInvoice){
        console.log(postData);
        return this.http.post<any>(`${this.config.apiEndpoint}/PurchaseInvoice`,postData);
        
    }

    SetPurchaseQuo(postData:IPRQua){
        console.log(postData);
        return this.http.post<any>(`${this.config.apiEndpoint}/PurchaseQuatation`,postData);
        
    }

    SetPurchaseShipping(postData:any){
        console.log(postData);
        return this.http.post<any>(`${this.config.apiEndpoint}/PurchaseQuatation`,postData);
        
    }
    SetPurchaseOrder(postData:any){
        console.log(postData);
        return this.http.post<any>(`${this.config.apiEndpoint}/Purchase`,postData);
        
    }

    GetWarehouse(){
        return this.http.get<any>(`${this.config.apiEndpoint}/GRN/GetEmpBranches`).pipe(map((data: any) => {
            return data;
        }));
    }
   
    
}