import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IEmployerPost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from 'src/app/models/employer.model';

@Injectable()
export class EmployerService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getEmployersList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployersList`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEmployeedetList(){
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeedetList`).pipe(map((data: any) => {
            return data;
        }));
    }

    getOrganizationList(o_id:number){
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetOrganizationList?o_id=${o_id}`).pipe(map((data: any) => {
            return data;
        }));
    }

    getbranchlist(b_id:number){
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getbranchlist?b_id==${b_id}`).pipe(map((data: any) => {
            return data;
        }));
    }

    getJobCatlogPriDetailes(){
        return this.http.get<any>(`${this.config.apiEndpoint}/Job/jb/GetJobCatlogPriDetailes`).pipe(map((data: any) => {
            return data;
        }));
    }

    SetEmployerPrimarydet(postData:IEmployerPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/SetEmployerPrimarydet`, postData).pipe(map((res: any) => {
            return res;
        }));
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
    getEmployeeriD() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeeriD`).pipe(map((data: any) => {
            return data;
        }));
    }
    UpadteEmpWrkprmtdet(postData:IEmployeeWorkPermit){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/UpadteEmpWrkprmtdet`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    
}