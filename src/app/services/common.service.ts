import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';


@Injectable()
export class CommonService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    checkFileAccess(OrgId: number, BUId: number, FileTypeId: number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Organisation/${OrgId}/BusinessUnit/${BUId}/FileType/${FileTypeId}/Validate`).pipe(map((data: any) => {
            return data;
        }));
    }

    checkBUAccess(OrgId: number, BUId: number, UserId: any) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Organisation/${OrgId}/User/${UserId}/BusinessUnit/${BUId}/Validate`).pipe(map((data: any) => {
            return data;
        }));
    }

    getPushNotifications() {
        return this.http.get<any>(`${this.config.apiEndpoint}/PushNotifications`).pipe(map((data: any) => {
            return data;
        }));
    }

    updatePushNotification(notificationId: number) {
        return this.http.post<any>(`${this.config.apiEndpoint}/PushNotifications/Update/${notificationId}`, null).pipe(map((res: any) => {
            return res;
        }));
    }
}