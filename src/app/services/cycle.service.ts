import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICycle } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { pipe } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Injectable()
export class CycleService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getAll() {
        return this.http.get<ICycle[]>(`${this.config.apiEndpoint}/cycle`).pipe(map((data: any) => {
            return data.cycles;
        }));
    }
}