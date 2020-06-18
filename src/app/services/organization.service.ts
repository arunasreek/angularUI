import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IOrganiationPost } from '../models';

@Injectable()
export class OrganizationService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getbranchlist(b_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getbranchlist?${b_id}`).pipe(map((data: any) => {
            return data;
        }));
    }

    getCountry() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetCountry`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEmployeeriD() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeeriD`).pipe(map((data: any) => {
            return data;
        }));
    }

    getenterprisealllist() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getenterprisealllist`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEnterpriseids() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEnterpriseids`).pipe(map((data: any) => {
            return data;
        }));
    }

    getJobCatlogPriDetailes() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Job/jb/GetJobCatlogPriDetailes`).pipe(map((data: any) => {
            return data;
        }));
    }

    getOrganizationID() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetOrganizationID`).pipe(map((data: any) => {
            return data;
        }));
    }

    getOrganizationList(o_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetOrganizationList?o_id=${o_id}`).pipe(map((data: any) => {
            return data;
        }));
    }

    setOrganization(postData:IOrganiationPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/SetOrganization`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    
   deleteOrganization(o_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/DelOrganization?o_id=${o_id}`).pipe(map((data: any) => {
            return data;
        }));
    }
}