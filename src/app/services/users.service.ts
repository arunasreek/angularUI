import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDashboardResponse, IRolePrevileges, IManageUserList, IUserStatus, IUserProfile, IApiResponse, IUserChangePassword, IDashboardAndKPiResponse, IPulishStatus } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getUserDataByOrganisationById(id) {
        return this.http.get<IManageUserList[]>(`${this.config.apiEndpoint}/Organisation/${id}/Users`).pipe(map((data: any) => {
            return data;
        }));
    }

    updateUserStatusById(formData: any, organisationId, userId, statusId) {
        return this.http.patch<IUserStatus>(`${this.config.apiEndpoint}/Organisation/${organisationId}/Users/${userId}/Status/${statusId}`, formData).pipe(map((data: IUserStatus) => {
            return data;
        }));
    }

    saveUser(postData: any, orgId: any) {
        return this.http.post<IUserStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User`, postData).pipe(map((res: any) => {
            return res;
        }))
    }

    getUserProfileByOrganisationIdAndUserId(orgId: number, userId: string) {
        return this.http.get<IUserProfile[]>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/profile`).pipe(map((data: any) => {
            return data;
        }));
    }

    changePassword(postData: IUserChangePassword) {
        return this.http.post<IApiResponse<IUserChangePassword>>(`${this.config.apiEndpoint}/Account/ChangePassword`, postData).pipe(map((res: any) => {
            return res;
        }))
    }

    saveUserRoles(postData: any, orgId: any, userId: any) {
        return this.http.post<IUserStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/Roles`, postData).pipe(map((res: any) => {
            return res;
        }))
    }

    getRolePrevilages(roleId: string) {
        return this.http.get<IRolePrevileges>(`${this.config.apiEndpoint}/Role/${roleId}/Previlege`).pipe(map((data: any) => {
            return data;
        }));
    }

    getAllDashboardChannelKPI(orgId: any, userId: any) {
        return this.http.get<IDashboardResponse>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/DashboardDetails`).pipe(map((data: any) => {
            return data.result;
        }));
    }

    getAllDashboardByOrgId(orgId: any) {
        return this.http.get<IDashboardAndKPiResponse>(`${this.config.apiEndpoint}/Organisation/${orgId}/Dashboard`).pipe(map((data: any) => {
            return data;
        }));
    }

    getAllMediaChannel() {
        return this.http.get<IDashboardAndKPiResponse>(`${this.config.apiEndpoint}/MediaChannel`).pipe(map((data: any) => {
            return data;
        }));
    }

    getNotificationMaster() {
        return this.http.get<IDashboardAndKPiResponse>(`${this.config.apiEndpoint}/Notification`).pipe(map((data: any) => {
            return data;
        }));
    }

    getBusinessUnitByOrgId(orgId: any) {
        return this.http.get<IDashboardAndKPiResponse>(`${this.config.apiEndpoint}/Organisation/${orgId}/BusinessUnit`).pipe(map((data: any) => {
            return data;
        }));
    }

    getAllKpi() {
        return this.http.get<IDashboardAndKPiResponse>(`${this.config.apiEndpoint}/KPI`).pipe(map((data: any) => {
            return data;
        }));
    }

    saveDashboardChannelKPI(orgId: any, userId: any, postData: any) {
        return this.http.post<any>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/DashboardDetails`, postData).pipe(map((res: any) => {
            return res;
        }))
    }

    forgotPassword(postData: any) {
        return this.http.post<any>(`${this.config.apiEndpoint}/account/ForgotPassword`, postData).pipe(map((res: any) => {
            return res;
        }))
    }

    tokenValidCheck(token: string, email: string) {
        let body = new URLSearchParams();
        body.set('Email', email);
        body.set('Token', token);
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.patch<any>(`${this.config.apiEndpoint}/account/ResetPasswordToken`, body.toString(), options).pipe(map((res: any) => {
            return res;
        }))
    }

    resetPassword(token: string, email: string, password: string) {
        let body = new URLSearchParams();
        body.set('Email', email);
        body.set('Token', token);
        body.set('Password', password);
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.patch<any>(`${this.config.apiEndpoint}/account/ResetPassword`, body.toString(), options).pipe(map((res: any) => {
            return res;
        }))
    }

    getPublishStatus(orgId: number, userId: string) {
        return this.http.get<IPulishStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/PublishDetail`).pipe(map((data: any) => {
            return data;
        }));
    }

    patchPublishUser(orgId: number, userId: string) {
        const formData = new FormData();
        return this.http.patch<any>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/Publish`, formData).pipe(map((res: any) => {
            return res;
        }));
    }

    getUserDetailsOrgIdandUserId(orgId: number, userId: string) {
        return this.http.get<IPulishStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/PublishDetail`).pipe(map((data: any) => {
            return data;
        }));
    }

    editUser(postData: any, orgId: any, userId: any) {
        return this.http.patch<IUserStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}`, postData).pipe(map((res: any) => {
            return res;
        }));
    }

    getRolesDetailsOrgIdandUserId(orgId: number, userId: string) {
        return this.http.get<IPulishStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/Roles`).pipe(map((data: any) => {
            return data;
        }));
    }

    editUserRoles(postData: any, orgId: any, userId: any) {
        return this.http.patch<IUserStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/Roles`, postData).pipe(map((res: any) => {
            return res;
        }));
    }

    getDashboardsChannelAndKPOrgIdandUserId(orgId: number, userId: string) {
        return this.http.get<IPulishStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/DashboardDetails`).pipe(map((data: any) => {
            return data;
        }));
    }

    editEditDashboardChannelKPI(postData: any, orgId: any, userId: any) {
        return this.http.patch<IUserStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/DashboardDetails`, postData).pipe(map((res: any) => {
            return res;
        }));
    }

    editNotification(postData: any, orgId: any, userId: any) {
        return this.http.post<IUserStatus>(`${this.config.apiEndpoint}/Organisation/${orgId}/User/${userId}/Notification`, postData).pipe(map((res: any) => {
            return res;
        }));
    }
}