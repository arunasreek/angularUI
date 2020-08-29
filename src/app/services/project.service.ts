import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IProjectPost} from 'src/app/models/project.model';

@Injectable()
export class ProjectService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    GetprojctList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetprojctList`).pipe(map((data: any) => {
            return data;
        }));
    }

   
    SetprojctList(postData:IProjectPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Enterprise/ES/SetprojctList`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
   
    getOrganizationList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetOrganizationList`).pipe(map((data: any) => {
            return data;
        }));
    } 
    
    
    
}