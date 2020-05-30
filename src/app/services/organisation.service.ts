import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDashboardKPIs, IDashboardOrgs, IOrgBasicDetails, IOrgFileTypes, IApiResponse, IDropdown, IBusinessUnit, IDataTypeAutoComplete, IAdminRoleDetails } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class OrganisationService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    uploadOrgLogo(formData: any) {
        return this.http.post<string>(`${this.config.apiEndpoint}/organisationLogo`, formData).pipe(map((data: string) => {
            return data;
        }));
    }

    getOrg(id: number) {
        return this.http.get<IOrgBasicDetails>(`${this.config.apiEndpoint}/organisation/${id}`).pipe(map((res: any) => {
            return res.organisation;
        }))
    }

    postOrgsBasicDetails(data: IOrgBasicDetails) {
        return this.http.post<IApiResponse<IOrgBasicDetails>>(`${this.config.apiEndpoint}/organisation`, data).pipe(map((res: any) => {
            return res;
        }))
    }

    patchOrgsBasicDetails(data: IOrgBasicDetails, organisationId: number) {
        return this.http.patch<IApiResponse<IOrgBasicDetails>>(`${this.config.apiEndpoint}/organisation/${organisationId}`, data).pipe(map((res: any) => {
            return res;
        }))
    }

    getFileTypes(orgId: number) {
        return this.http.get<IDropdown[]>(`${this.config.apiEndpoint}/organisation/${orgId}/filetypes`).pipe(map((res: any) => {
            return res.fileTypes;
        }));
    }

    getFileTypeDetails(orgId: number, fileTypeId: number) {
        return this.http.get<IOrgFileTypes>(`${this.config.apiEndpoint}/organisation/${orgId}/filetype/${fileTypeId}/details`).pipe(map((res: any) => {
            return res.fileTypeDetails;
        }))
    }



    postFileTypes(data: IOrgFileTypes) {
        return this.http.post<IApiResponse<IOrgFileTypes>>(`${this.config.apiEndpoint}/organisation/filetype`, data).pipe(map((res: any) => {
            return res;
        }))
    }

    getBusinessUnits(id: number) {
        return this.http.get<IBusinessUnit[]>(`${this.config.apiEndpoint}/organisation/${id}/businessunit`).pipe(map((res: any) => {
            return res;
        }));
    }

    postBusinessUnit(orgId: number, buName: string) {
        let data = `OrgId=${orgId}&BUName=${buName}`;
        let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post<IApiResponse<IBusinessUnit>>(`${this.config.apiEndpoint}/businessunit`, data, { headers: headers }).pipe(map((res: any) => {
            return res;
        }));
    }

    getDataTypeAutoComplete(orgId: number, query: string) {
        return this.http.get<IDataTypeAutoComplete[]>(`${this.config.apiEndpoint}/organisation/${orgId}/FileType/${query}`).pipe(map((res: any) => {
            return res;
        }));
    }

    getAdminRoleList(orgId: number, role: string) {
        return this.http.get<IAdminRoleDetails>(`${this.config.apiEndpoint}/organisation/${orgId}/Role/${role}`).pipe(map((res: any) => {
            return res;
        }));
    }

    updateOrgAdmin(postData: any, orgId: number) {
        return this.http.post<any>(`${this.config.apiEndpoint}/Organisation/${orgId}/Admin`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
}