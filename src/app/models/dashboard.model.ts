export interface IDashboardKPIs {
    organisation: number;
    user: number;
    dataSet: number;
    businessUnit: number;
}

export interface IDashboardOrgs {
    orgId: number;
    orgName: string;
    statusId: number;
    status: string;
    activeFromDate: Date;
    subscriptionPeriodId: number;
    dataCycleId: number;
}

export interface IUserDashBoard {
    success: true,
    error: any,
    result: IUserDashboardAccess[]
}

export interface IUserDashboardAccess {
    id: number,
    userId: string,
    dashboardId: number,
    dashboardName: string
}

export interface IPushNotificationResult {
    success: boolean,
    error: any,
    result: IPushNotification
}

export interface IPushNotification {
    pushUserNotificationAggregates: IPushNotificationModel[];
}

export interface IPushNotificationModel {
    notificationId: number,
    organisationId: number,
    buId: number
    buName: string,
    processStateId: number
    fileTypeId: number
    fileTypeName: string
    remark: number
    createdDate: string,
    isSeen: boolean
}

export interface IDataPreparationCSV {
    success: boolean,
    error: any,
    result: IDataPreparationCSVModel
}

export interface IDataPreparationCSVModel {
    etlFileGroupId: string;
    filePath: string;
}

