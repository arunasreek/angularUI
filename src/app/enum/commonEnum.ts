export enum CautionType {
    Error = 'Error',
    Warning = 'Warning',
}

export enum ProcessType {
    Manual = 1,
    Automatic = 2
}

export enum CustomHTTPStatus {
    Invalid_Grant = 'invalid_grant',
    TOKEN_EXPIRE = 467
}

export enum ApprovalStatus {
    Pending = 0, //Pending,
    Accepted = 1, //Accepted,
    Rejected = 2, //Rejected
}

export enum DashboardItem {
    Executive_Dashboard = 1,
    Media_Effectiveness = 2,
    Trend_Analysis = 3,
    Volume_Contribution = 4,
    Campaign_Deep_Dive = 5,
    Data_Summary = 6,
    DataReports = 7,
    Financial_Dashboard = 8
}

export enum DataTypes {
    String = 'string',
    Alphanumeric = 'alphanumeric'
}

export enum OrgStatus {
    Draft = 1,
    Approved = 2,
    Published = 3,
    Unpublished = 4
}

export enum FormValid {
    INVALID = "INVALID",
    VALID = "VALID"
}

export enum CycleDetails {
    Quarterly = 1,
    Half_Yearly = 2,
    Yearly = 3
}

export enum ProcessEntity {
    WeekEntity = "weekEntity",
    DayEntity = "dayEntity",
    MonthEntity = "monthEntity"
}