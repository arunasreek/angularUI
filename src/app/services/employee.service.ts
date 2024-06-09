import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IEmployeePost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from '../models';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getEmployersList() {
        
        return this.http.get<any>(`${this.config.apiEndpoint}/Employee/GetAllEmpList`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEmployeedetList(){
        return this.http.get<any>(`${this.config.apiEndpoint}/Employees/GetAllEmployees`).pipe(map((data: any) => {
            return data;
        }));
    }

    getOrganizationList(){
        return this.http.get<any>(`${this.config.apiEndpoint}/OrganizationUnit/GetAllOrganization`).pipe(map((data: any) => {
            return data;
        }));
    }

    getbranchlist(b_id:number){
        return this.http.get<any>(`${this.config.apiEndpoint}/EmployeeBranch/GetAllEmpBranch`).pipe(map((data: any) => {
            return data;
        }));
    }

    getJobCatlogPriDetailes(){
        return this.http.get<any>(`${this.config.apiEndpoint}/Job/jb/GetJobCatlogPriDetailes`).pipe(map((data: any) => {
            return data;
        }));
    }

    setEmployeepdet(postData:IEmployeePost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Employees`,postData);
    }

    
    deleteEmployeepdet(postData:IEmployeeDelete){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/Dltemployee`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    
    editEmployeepdet(postData:IEmployeeEdit){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/EditEmployeepdet`, postData).pipe(map((res: any) => {
            return res;
        }));
    }

    UpadteEmpWrkprmtdet(postData:IEmployeeWorkPermit){
        return this.http.post<any>(`${this.config.apiEndpoint}/Employees`,postData);

    }
    
}