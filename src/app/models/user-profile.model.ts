export interface IUserProfile {
    success: string;
    error: any;
    result: IUserBasicDetails[];
}

export interface IUserBasicDetails {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    userName: string;
    roles: IRolesData[];
    privileges: IPrivileges[];
}

export interface IRolesData {
    id: string;
    role: string;
}

export interface IPrivileges {
    privilege: string;
}

export interface IUserChangePassword {
    OldPassword: string;
    NewPassword: string;
    ConfirmPassword: string;
}

export interface IRolePrevileges {
    success: string;
    error: any;
    result: IRolePrevilegesObject;
}

export interface IRolePrevilegesObject {
    rolePrevileges: IRolePrevilegeEntity;
}

export interface IRolePrevilegeEntity {
    id: number;
    previlegeId: number;
    previlege: string;
}

export interface IDashboardResponse {
    success: string;
    error: any;
    result: IDashboardDetailsObject;
}

export interface IDashboardDetailsObject {
    dashboardDetails: IDashboardDetails;
}

export interface IDashboard {
    id: number;
    dashboardId: number;
    isActive: boolean;
}

export interface IChannel {
    id: number;
    channelId: number;
    isActive: boolean;
}

export interface IKpIs {
    id: number;
    kpiId: number;
    isActive: boolean;
}

export interface IDashboardDetails {
    userId: string;
    dashboards: IDashboard[];
    channels: IChannel[];
    kpIs: IKpIs[];
}

export interface IDashboardAndKPiResponse {
    success: boolean;
    error: any;
    result: any;
}

export interface IPulishStatus {
    success: boolean;
    error: any;
    result: IUserPublishStatus;
}

export interface IUserPublishStatus {
    userPublishStatus: IPulishStatusDetails
}

export interface IPulishStatusDetails {
    userId: string,
    isPublished: boolean,
    isRoleAssigned: boolean,
    isDashboardAssigned: boolean
}

export interface IEditNotification {
    Notification: INotification[]
}

export interface INotification {
    id: number,
    notificationActivities: INotificationActivities[]
}

export interface INotificationActivities {
    id: number,
    isSelected: boolean
}