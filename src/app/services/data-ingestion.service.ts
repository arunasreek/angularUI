import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IErrorWarningDetails, IErrorWarningResponse, IDataIngestionUserColumMappingDetailsObject, IDataIngestionGetPeriods, IResponseSampleFileColumns, IResponseColumMappingDetails, IFileLogResponse, IFileProcess, ITop5Records, ITempTableData, IDropdown, IResponseEngineColumMappingDetails } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';
import { saveAs } from 'file-saver';


@Injectable()
export class DataIngestionServices {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getPeriods(orgId: number) {
        return this.http.get<IDataIngestionGetPeriods[]>(`${this.config.apiEndpoint}/Organisation/${orgId}/Period`).pipe(map((data: any) => {
            return data.result.periods;
        }));
    }

    getSampleFormats(orgId: number, fileTypeId: number) {
        return this.http.get<IResponseSampleFileColumns[]>(`${this.config.apiEndpoint}/Organisation/${orgId}/FileType/${fileTypeId}/FileUploadSampleFormat`).pipe(map((data: any) => {
            return data;
        }));
    }

    uploadNewFile(formData: any, orgId: number, uploadedFileId: number) {

        return this.http.post<any>(`${this.config.apiEndpoint}/Organisation/${orgId}/UploadedFileId/${uploadedFileId}/FileUpload`, formData).pipe(map((data: any) => {
            return data;
        }));
    }



    getColumnMappingDetails(orgId, businessUnitId, periodId, fileTypeId) {
        return this.http.get<IResponseEngineColumMappingDetails>(`${this.config.apiEndpoint}/Organisation/${orgId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/EngineColumMapping`).pipe(map((data: any) => {
            return data
        }));
    }

    saveColumnMappingDetails(data: IDataIngestionUserColumMappingDetailsObject, orgId: number, businessUnitId: number, periodId: number, fileTypeId: number) {
        return this.http.post<any>(`${this.config.apiEndpoint}/organisation/${orgId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/UserColumMapping`, data).pipe(map((res: any) => {
            return res;
        }))
    }

    getAllErrorsWarnings(orgId, uploadedFileId, fileRevisionId) {
        return this.http.get<IErrorWarningDetails>(`${this.config.apiEndpoint}/Organisation/${orgId}/UploadedFile/${uploadedFileId}/FileRevision/${fileRevisionId}/ErrorWarnings`).pipe(map((data: any) => {
            return data;
        }));
    }

    getAllFileLog(orgId, businessUnitId, periodId, fileTypeId) {
        return this.http.get<IFileLogResponse>(`${this.config.apiEndpoint}/Organisation/${orgId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/FileLog`).pipe(map((data: any) => {
            return data;
        }));
    }

    getFileForDownload(orgId, fileLogId) {
        return this.http.get(`${this.config.apiEndpoint}/Organisation/${orgId}/FileLog/${fileLogId}/DownloadFileLog`, { responseType: 'blob' })
            .subscribe(
                (response: any) => {
                    // if(response.success){
                    saveAs(response, 'fileLog.csv')
                    //}
                });
    }

    saveUploadedFileDetails(orgId, businessUnitId, periodId, fileTypeId) {
        return this.http.post<any>(`${this.config.apiEndpoint}/organisation/${orgId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/FileUploadDetails`, '').pipe(map((res: any) => {
            return res;
        }))
    }

    getFileProcessingStatus(orgId, businessUnitId, periodId, fileTypeId) {
        return this.http.get<IFileProcess>(`${this.config.apiEndpoint}/organisation/${orgId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/FileProcessingState`).pipe(map((res: IFileProcess) => {
            return res;
        }))
    }

    getFileTop5Records(orgId, businessUnitId, periodId, fileTypeId, UploadedFileId) {
        return this.http.get<ITop5Records>(`${this.config.apiEndpoint}/organisation/${orgId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/FileId/${UploadedFileId}/TopRecords`).pipe(map((res: ITop5Records) => {
            return res;
        }))
    }

    updateRecordsInTemp(formData: any, orgId, uploadedFileId, fileRevisionId) {
        return this.http.patch<ITempTableData>(`${this.config.apiEndpoint}/Organisation/${orgId}/UploadedFile/${uploadedFileId}/FileRevision/${fileRevisionId}/Validation`, formData).pipe(map((data: ITempTableData) => {
            return data;
        }));
    }

    getFileTypes(OrganisationId, BusinessUnitId, PeriodId) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Organisation/${OrganisationId}/BusinessUnit/${BusinessUnitId}/Period/${PeriodId}/fileTypes`).pipe(map((res: any) => {
            return res;
        }));
    }

    saveSelfApproveDetails(formData: any, organisationId, businessUnitId, periodId) {
        return this.http.post<any>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/SelfApprove`, formData).pipe(map((res: any) => {
            return res;
        }))
    }

    saveErrorWarningDetails(formData: any, organisationId, uploadedFileId, fileRevisionId) {
        return this.http.patch<any>(`${this.config.apiEndpoint}/Organisation/${organisationId}/UploadedFile/${uploadedFileId}/FileRevision/${fileRevisionId}/Validation`, formData).pipe(map((res: any) => {
            return res;
        }))
    }

    getFileDuedDate(orgId, businessUnitId, periodId, fileTypeId) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Organisation/${orgId}/BusinessUnit/${businessUnitId}/FileType/${fileTypeId}/Period/${periodId}/FileUploadDueDate`).pipe(map((res: any) => {
            return res;
        }));
    }

    discardTheUploadedFile(formData: any, organisationId: any, businessUnitId: number, periodId: number, fileTypeId: number, uploadedFileId: number) {
        return this.http.patch<any>(`${this.config.apiEndpoint}/Organisation/${organisationId}/BusinessUnit/${businessUnitId}/Period/${periodId}/FileType/${fileTypeId}/UploadedFile/${uploadedFileId}/DiscardFile`, formData).pipe(map((res: any) => {
            return res;
        }));
    }

}