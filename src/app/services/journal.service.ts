import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { JVPost} from 'src/app/models/vouchers.model';

@Injectable()
export class JournalService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    GetChatofaccList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetChatofaccList`).pipe(map((data: any) => {
            return data;
        }));
    }

    GetEnterpriseids(){
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEnterpriseids`).pipe(map((res: any) => {
            return res;
        }));
    }
    GetEmployeeriD() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeeriD`).pipe(map((data: any) => {
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
    Getprojectlist() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/Getprojectlist`).pipe(map((data: any) => {
            return data;
        }));
    } 
    GetAccountnums() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetAccountnums`).pipe(map((data: any) => {
            return data;
        }));
    } 
    
    GetJv(id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Financila/Fn/GetJv?id=${id}`).pipe(map((data: any) => {
            return data;
        }));
    }
    SetJvBulk(postData:JVPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Financila/Fn/SetJvBulk`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    
}