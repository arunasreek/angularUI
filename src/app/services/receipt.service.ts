import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import {RVPost,PVPost} from 'src/app/models/vouchers.model';

@Injectable()
export class ReceiptService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    GetprojectList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/Getprojectlist`).pipe(map((data: any) => {
            return data;
        }));
    }

   
    Getbranchlist(){
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getbranchlist`).pipe(map((res: any) => {
            return res;
        }));
    }
   
    getOrganizationID() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetOrganizationID`).pipe(map((data: any) => {
            return data;
        }));
    } 
    
    GetEmployeeriD() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeeriD`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetBanknames(bank_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetBanknames?bank_id=${bank_id}`).pipe(map((data: any) => {
            return data;
        }));
        
    }
    GetAccountnums() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetAccountnums`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetRv(Type:string) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetRv?Type=${Type}`).pipe(map((data: any) => {
            return data;
        }));
    }
    SetRvBulk(postData:RVPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Financila/Fn/SetRvBulk`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    SetPvBulk(postData:PVPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Financila/Fn/SetPvBulk`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
}