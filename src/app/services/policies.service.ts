import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IItemGroupPost,IItemCategoryPost,IStockItemPost} from 'src/app/models/item.model';

@Injectable()
export class PoliciesService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    GetItemGroupList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Stk/mgmt/GetItemGroupList`).pipe(map((data: any) => {
            return data;
        }));
    }
    GetStockItems() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Stk/mgmt/GetStockItems`).pipe(map((data: any) => {
            return data;
        }));
    }
    GetItemCategoryList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Stk/mgmt/GetItemCategoryList`).pipe(map((data: any) => {
            return data;
        }));
    }

    GetunitOfMeasure() {
        return this.http.get<any>(`${this.config.apiEndpoint}/Stk/mgmt/GetunitOfMeasure`).pipe(map((data: any) => {
            return data;
        }));
    }
   
   
    SetItemGroup(postData:IItemGroupPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Stk/mgmt/SetItemGroup`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
    SetItemCategory(postData:IItemCategoryPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Stk/mgmt/SetItemCategory`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
   
    SetStockItem(postData:IStockItemPost){
        return this.http.post<any>(`${this.config.apiEndpoint}/Stk/mgmt/SetStockItem`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
   
   
    
    
    
    
}