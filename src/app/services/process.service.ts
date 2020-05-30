import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGetProcess, IProcessStatus, IProcessOwnersModel, IProcessModel, IFileDueDate, IProcessComponentsModel, ICommonResult } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';


@Injectable()
export class ProcessService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getProcessSummary(organisationId: number, businessUnitId: number, periodId: number) {
        return this.http.get<IGetProcess>(`${this.config.apiEndpoint}/Organisation/${organisationId}//BusinessUnit/${businessUnitId}/Period/${periodId}/ProcessStatus`).pipe(map((data: any) => {
            return data;
        }));
    }

    getProcessStatus(organisationId: number, businessUnitId: number, periodId: number) {
        return this.http.get<IProcessStatus>(`${this.config.apiEndpoint}/Organisation/${organisationId}//BusinessUnit/${businessUnitId}/Period/${periodId}/ProcessStatusBar`).pipe(map((data: any) => {
            return data;
        }));
    }

    getProcessLog(organisationId: number, businessUnitId: number, periodId: number, fileTypeId: number, processState: number) {
        return this.http.get<IProcessStatus>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/Log/${processState}`).pipe(map((data: any) => {
            return data;
        }));
    }

    getAllOwner(organisationId: number, businessUnitId: number, fileTypeId: number, processState: number) {
        return this.http.get<IProcessOwnersModel>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/FileType/${fileTypeId}/Owner/${processState}`).pipe(map((data: any) => {
            return data;
        }));
    }

    postChangeProcessOwner(formData: any, organisationId: number, businessUnitId: number, fileTypeId: number, processState: number) {
        return this.http.post<IProcessOwnersModel>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/FileType/${fileTypeId}/ChangeProcessOwner/${processState}`, formData).pipe(map((data: any) => {
            return data;
        }));
    }

    postChangeProcessType(formData: any, organisationId: number, businessUnitId: number, fileTypeId: number, processState: number) {
        return this.http.post<IProcessOwnersModel>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/FileType/${fileTypeId}/ChangeProcessType/${processState}`, formData).pipe(map((data: any) => {
            return data;
        }));
    }

    getProcessDueDate(organisationId: number, businessUnitId: number, fileTypeId: number, processState: number, periodId: number) {
        return this.http.get<IFileDueDate>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/ProcessState/${processState}/File/${fileTypeId}/Period/${periodId}/DueDate`).pipe(map((data: any) => {
            return data;
        }));
    }

    postProcessDueDate(formData: any, organisationId: number, businessUnitId: number, fileTypeId: number, processState: number, periodId: number) {
        return this.http.post<IFileDueDate>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/ProcessState/${processState}/File/${fileTypeId}/Period/${periodId}/DueDate`, formData).pipe(map((data: any) => {
            return data;
        }));
    }

    getProcessComponents(organisationId: number, businessUnitId: number) {
        return this.http.get<IProcessComponentsModel>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/ProcessComponents`).pipe(map((data: any) => {
            return data;
        }));
    }

    postProcessNotification(formData: any, organisationId: number, businessUnitId: number, fileTypeId: number, processState: number, periodId: number) {
        return this.http.post<ICommonResult>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/ProcessState/${processState}/SendNotification`, formData).pipe(map((data: any) => {
            return data;
        }));
    }

}