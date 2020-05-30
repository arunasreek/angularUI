import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IQuarter } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class QuarterService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getAll() {
        return this.http.get<IQuarter[]>(`${this.config.apiEndpoint}/BrandLevel/GetAll`).pipe(map((data: any) => {
            return data;
        }));
    }
}