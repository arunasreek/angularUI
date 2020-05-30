import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDashboardKPIs, IDashboardOrgs, IUserDashBoard, IDataPreparationCSV } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class DashboardService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getDashboardKPIs() {
        return this.http.get<IDashboardKPIs>(`${this.config.apiEndpoint}/Dashboard/GetKPI`).pipe(map((data: any) => {
            return data.dashboardKPIs;
        }))
    }

    getDashboardOrgs() {
        return this.http.get<IDashboardOrgs[]>(`${this.config.apiEndpoint}/Organisation`).pipe(map((data: any) => {
            return data.organisation;
        }))
    }

    getUserDetails(orgId: number, userId: string) {
        return this.http.get<IDashboardOrgs[]>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}`).pipe(map((data: any) => {
            return data.result;
        }))
    }

    getUserDashboard(orgId: number, userId: string) {
        return this.http.get<IUserDashBoard>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/DashboardName`).pipe(map((data: any) => {
            return data;
        }))
    }

    getTableauUrlByOrgId(orgId: number, userId: string, dashboardId: number) {
        return this.http.get<IUserDashBoard>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/Dashboard/${dashboardId}/DashboardURL`).pipe(map((data: any) => {
            return data;
        }))
    }

    downloadETLData(organisationId: number){
        return this.http.get<IDataPreparationCSV>(`${this.config.apiEndpoint}/Organisation/${organisationId}/DownloadDataPreparationCSV`).pipe(map((data: any) => {
            return data;
        }))
    }


}