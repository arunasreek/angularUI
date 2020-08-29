import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IEmployeeBranchPost, IEmployeeBranchDelete } from 'src/app/models/empbranch.model';

@Injectable()
export class EmployerBranchesService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }
    getEmployeeriD() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeeriD`).pipe(map((data: any) => {
            return data;
        }));
    }
    getbranchlist(b_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getbranchlist?b_id=${b_id}`).pipe(map((data: any) => {
            return data;
        }));
      
    }
    getStatelist(country_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getstate?${country_id}`).pipe(map((data: any) => {
            return data;
        }));
    }
    SetEmpbarch(postData:IEmployeeBranchPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/SetEmpbarch`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    DeleteEmpbranch(BranchId: number){
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/DeleteEmpbranch?b_id=${BranchId}`).pipe(map((res: any) => {
            return res;
        }));
    }
}
