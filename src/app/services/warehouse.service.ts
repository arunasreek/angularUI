import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IFloorPost,IRowPost,IRackPost,IWareHouse } from 'src/app/models/warehouse.model';

@Injectable()
export class WarehouseService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    GetFloorList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/WareHouse/GetFloorList`).pipe(map((data: any) => {
            return data;
        }));
    }
    GetWareHouseList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/WareHouse/GetWarehouseList`).pipe(map((data: any) => {
            return data;
        }));
    }
    SetWareHouse(postData:IWareHouse) {
        return this.http.post<any>(`${this.config.apiEndpoint}/WareHouse/ware`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
   
    SetFloordet(postData:IFloorPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Stk/mgmt/SetFloordet`, postData).pipe(map((res: any) => {
            return res;
        }));
    }

    GetRowList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/WareHouse/GetRowList`).pipe(map((data: any) => {
            return data;
        }));
    }

   
    SetRowdet(postData:IRowPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Stk/mgmt/SetRowdet`, postData).pipe(map((res: any) => {
            return res;
        }));
    }

    GetRackList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/WareHouse/GetRackList`).pipe(map((data: any) => {
            return data;
        }));
    }

   
    SetRackdet(postData:IRackPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Stk/mgmt/SetRackdet`, postData).pipe(map((res: any) => {
            return res;
        }));
    }


  
    getEmployeeriD() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Enterprise/ES/GetEmployeeriD`).pipe(map((data: any) => {
            return data;
        }));
    }
   
}