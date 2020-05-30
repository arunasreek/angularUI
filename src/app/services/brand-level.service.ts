import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBrandLevel } from '../models/brand-level.model';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { pipe } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Injectable()
export class BrandLevelService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getAll() {
        return this.http.get<IBrandLevel[]>(`${this.config.apiEndpoint}/BrandLevel/GetAll`).pipe(map((data: any) => {
            return data.brandLevels;
        }));
    }
}