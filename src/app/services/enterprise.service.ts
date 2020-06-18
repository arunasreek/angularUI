import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IEnterPriseDetailsPost } from '../models/enterprise.model';

@Injectable()
export class EnterpriseService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }


    setOrganization(postData:IEnterPriseDetailsPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/SetEterpricedetails`, postData).pipe(map((res: any) => {
            return res;
        }));
    }

}