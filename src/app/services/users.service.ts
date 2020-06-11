import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { IUserProfile } from '../models';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    saveUser(postData: any) {
        return this.http.post<IUserProfile>(`${this.config.apiEndpoint}/Account/Register`, postData).pipe(map((res: any) => {
            return res;
        }))
    }
}