import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IProjectPost} from 'src/app/models/project.model';

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
    GetRv(Type:string) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetRv?Type=${Type}`).pipe(map((data: any) => {
            return data;
        }));
    }
    
}