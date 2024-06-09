import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IEnterPriseDetailsPost } from '../models/enterprise.model';
import { IEnterPriseDataConnSettings } from '../models/enterprise.model';
import { IFinancialSetting } from '../models/enterprise.model';
import { IOtherDetails } from '../models/enterprise.model';
import { Observable } from 'rxjs';
//import { from } from 'rxjs/internal/observable/from';

@Injectable()
export class EnterpriseService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }



    SetOtherDetails(PostData:IOtherDetails):Observable<any>{
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise`,PostData);
    }
    SetFinancialSettings(PostData:IFinancialSetting):Observable<any>{
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise`,PostData);
    }

    SetDataConnSettings(PostData:IEnterPriseDataConnSettings):Observable<any>{


        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise`,PostData);
    }
    getEnterpriseById(ep_id:number):Observable<any>{


        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/GetDetailsById`,ep_id);
    }
    setOrganization(postData:IEnterPriseDetailsPost):Observable<any>{
        // const headers ={'content-type':'application/json'}
        // const body =JSON.stringify(postData);
        // console.log(body);
        // postData.ep_id ="00000000-0000-0000-0000-000000000000";
        postData.ep_id ='00000000-0000-0000-0000-000000000000';
        //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
        

    //    var data = this.http.post<any>(`${this.config.apiEndpoint}/SetEnterPrise`, postData,httpOptions).pipe(map((data: any) => {
    //     return data;
    // }));
        
        const headers = new HttpHeaders().set('content-type', 'application/json'); 
        // var json =JSON.stringify(postData);
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise`,postData);
    // .pipe(map((res: any) => {
    //     return res;
    // }));
    //    console.log(data);
    //    return data;
        
    }

    uploadlogoNbanner(files:FormData){
        console.log(files);
        const headers = new HttpHeaders().append('Content-Disposition','multipart/form-data');
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/uploadLogoNbanner`,files,{headers});
    }

    getStatelist(country_id:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/Getstate?${country_id}`).pipe(map((data: any) => {
            return data;
        }));
    }

}