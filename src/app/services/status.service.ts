import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStatus } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class StatusService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getAll() {
        return this.http.get<IStatus[]>(`${this.config.apiEndpoint}/status`).pipe(map((data: any) => {
            return data.status;
        }));
    }
}