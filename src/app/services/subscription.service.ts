import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISubscription } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { pipe } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Injectable()
export class SubscriptionService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getAll() {
        return this.http.get<ISubscription[]>(`${this.config.apiEndpoint}/subscription`).pipe(map((data: any) => {
            return data.subscriptions;
        }));
    }
}