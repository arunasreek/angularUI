import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IcustomerPost } from 'src/app/models/customer.model';
import { IChartPost } from 'src/app/models/financial.model';

@Injectable()
export class CharofAcctsService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {


    }
    GetChatofaccList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetChatofaccList`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEmployeeriD() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeeriD`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEnterpriseids() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEnterpriseids`).pipe(map((data: any) => {
            return data;
        }));
    }

    getOrganizationID() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetOrganizationID`).pipe(map((data: any) => {
            return data;
        }));
    }
    GetprojctList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/Getprojectlist`).pipe(map((data: any) => {
            return data;
        }));
    }
    getbranchlist(){
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getbranchlist`).pipe(map((data: any) => {
            return data;
        }));
    }
    SetFinanceChartAccount(postData:IChartPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Financila/Fn/SetFinanceChartAccount`,postData).pipe(map((res: any) => {
            return res;
        }));
    }
    getJv(id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetJv?id=${id}`).pipe(map((data: any) => {
            return data;
        }));
    }
    
}