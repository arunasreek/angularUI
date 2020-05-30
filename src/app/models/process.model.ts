export interface IGetProcess {
    success: boolean;
    error: any;
    result: IProcessModel;
}

export interface IProcessFileUpload {
    fileUploadedId: number,
    organisationFileTypeId: number,
    fileTypeName: string,
    owner: string
    fileUploadProcessStatus: IProcessFileUploadProcessStatus
}

export interface IProcessFileUploadProcessStatus {
    status: any,
    dueDate: any,
    uploadedDate: any
}

export interface IProcessFileApproved {
    fileUploadedId: number,
    organisationFileTypeId: number,
    fileTypeName: string,
    owner: string
    fileApprovedProcessStatus: IProcessFileApprovedProcessStatus
}

export interface IProcessFileApprovedProcessStatus {
    status: any,
    dueDate: any,
    approvedDate: any
}

export interface IProcessModel {
    fileUpload: IProcessFileUpload;
    fileApproved: IProcessFileApproved;
    dataPrepartion: IDataPrepartion;
    reports: IReports
}

export interface IDataPrepartion {
    dataPrepartionProcessStatus: IProcessFileApprovedProcessStatus;
    owner: string;
}

export interface IReports {
    reportsProcessStatus: IProcessFileApprovedProcessStatus;
    owner: string;
}

export interface IProcessStatus {
    success: boolean;
    error: any;
    result: IProcessStatusBar;
}

export interface IProcessStatusBar {
    isFilesUploadDone: boolean,
    isFilesApprovedDone: boolean,
    isDataPreparationDone: boolean,
    isReportsDone: boolean
}

export interface IProcessStatusLog {
    success: boolean;
    error: any;
    result: IProcessStatusLogDetails[];
}

export interface IProcessStatusLogDetails {
    fileStatus: string,
    name: string,
    timestamp: string
}

export interface IProcessOwnersModel {
    success: boolean;
    error: any;
    result: any;
}

export interface IProcessOwners {
    id: string,
    ownerName: string,
    isSelected: boolean
}

export interface IPostProcessOwner {
    UserId: string
}

export interface IPostProcessType {
    processTypeId: number
}

export interface IFileDueDate {
    success: boolean;
    error: any;
    result: IFileDueDateModel;
}

export interface IFileDueDateModel {
    cycleDetails: ICycleDetails[],
    weeks: IWeeks,
    days: IDays,
    months: IMonths
}

export interface ICycleDetails {
    cycleId: number,
    cycleType: string,
    isSelected: boolean
}

export interface IWeeks {
    weeksList: IWeeksList[]
}

export interface IWeeksList {
    entity: string,
    isSelected: boolean
}

export interface IDays {
    daysList: IDaysList[]
}

export interface IDaysList {
    entity: string,
    isSelected: boolean
}

export interface IMonths {
    monthsList: IMonthsList[]
}

export interface IMonthsList {
    entity: string,
    isSelected: boolean
}

export interface IPostDueDate {
    WeekOfTheMonth: string,
    DayOfTheWeek: string,
    MonthOfTheCycle: string
}

export interface IProcessComponentsModel {
    success: boolean,
    error: any,
    result: IProcessComponents
}

export interface IProcessComponents {
    viewLog: boolean,
    changeOwner: boolean,
    changeDueDate: boolean,
    sendNotification: boolean,
    changeProcessType: boolean
}

export interface ICommonResult {
    success: boolean;
    error: any;
    result: any;
}

export interface IPostNotification {
    NotificationRemarks: string
}

export interface IPostProcessType {
    processTypeId: number
}