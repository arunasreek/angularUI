import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApprovals, IApiResponse } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';


@Injectable()
export class ApprovalsService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getApprovalsDetails(organisationId: number, businessUnitId: number, periodId: number) {
        return this.http.get<IApprovals>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/List`).pipe(map((data: any) => {
            return data;
        }))
    }

    postApprovalsDetails(formdata: any, organisationId: number, businessUnitId: number, periodId: number) {
        return this.http.post<IApprovals>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileApprove`, formdata).pipe(map((data: any) => {
            return data;
        }))
    }

    postDataPreparationDetails(formdata: any, organisationId: number, businessUnitId: number, periodId: number, groupId: string, status: boolean) {
        return this.http.post<IApprovals>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/GroupId/${groupId}/Status/${status}/DataPreperation`, formdata).pipe(map((data: any) => {
            return data;
        }))
    }

    //2nd Level Approve
    postFileApprove(formdata: any, organisationId: number, businessUnitId: number, periodId: number) {
        return this.http.post<IApprovals>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileApprove`, formdata).pipe(map((data: any) => {
            return data;
        }))
    }

    postReportstails(formData: any, organisationId: number, businessUnitId: number, periodId: number, groupId: string, status: boolean) {
        return this.http.post<any>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/Group/${groupId}/Status/${status}/ReportsApproval`, formData).pipe(map((res: any) => {
            return res;
        }))
    }
}
