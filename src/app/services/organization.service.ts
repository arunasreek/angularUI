import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IOrganiationPost } from '../models';

@Injectable()
export class OrganizationService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getOrganizationUnitList(){
        return this.http.get<any>(`${this.config.apiEndpoint}/OrganizationUnit/GetAllOrganization`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEmpBranchList(){
        return this.http.get<any>(`${this.config.apiEndpoint}/EmployeeBranch/GetAllEmpBranch`).pipe(map((data: any) => {
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

    getEmployersList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Employee/GetAllEmpList`).pipe(map((data: any) => {
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
        return this.http.post<any>(`${this.config.apiEndpoint}/OrganizationUnit`,postData);
    }
    
    
   deleteOrganization(o_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/DelOrganization?o_id=${o_id}`).pipe(map((data: any) => {
            return data;
        }));
    }
}