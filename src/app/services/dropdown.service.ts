import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDropdown } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class DropdownService{
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getLocations(){
        return this.http.get<IDropdown[]>(`${this.config.apiEndpoint}/Location`).pipe(map((res:any)=>{
            return res.locations;
        }));
    }

    getFrequencies(){
        return this.http.get<IDropdown[]>(`${this.config.apiEndpoint}/DataFrequency`).pipe(map((res:any)=>{
            return res.dataFrequencies;
        }));
    }

    getBrandLevels(){
        return this.http.get<IDropdown[]>(`${this.config.apiEndpoint}/BrandLevel`).pipe(map((res:any)=>{
            return res.brandLevels;
        }));
    }

    getChannelLevels(){
        return this.http.get<IDropdown[]>(`${this.config.apiEndpoint}/ChannelLevel`).pipe(map((res:any)=>{
            return res.channelLevels;
        }));
    }
}