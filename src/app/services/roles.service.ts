import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoles, IAllRoles } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class RolesService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getUserRolesById(id) {
        return this.http.get<IRoles[]>(`${this.config.apiEndpoint}/Organisation/${id}/Roles`).pipe(map((data: any) => {
            return data;
        }));
    }

    getAllRoles() {
        return this.http.get<IAllRoles[]>(`${this.config.apiEndpoint}/Roles`).pipe(map((data: any) => {
            return data;
        }));
    }
}