import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';


@Injectable()
export class CommonService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getCountry() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Common/GetAllCountries`).pipe(map((data: any) => {
            return data;
        }));
    }
    getStates() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Common/GetStates`).pipe(map((data: any) => {
            return data;
        }));
    }
    getCities() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Common/GetCities`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEnterprisealllist() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/GetEnterprise`).pipe(map((data: any) => {
            console.log(data);
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

    getOrganizationList(o_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetOrganizationList?o_id=${o_id}`).pipe(map((data: any) => {
            return data;
        }));
    }

    getEnterpriseById(epId:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/GetDetailsById?ep_id=${epId}`).pipe(map((data: any) => {
            console.log(data);
            return data;
        }));
    }
   
}