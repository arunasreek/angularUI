export interface IEmployerPost {
    ep_id: number,
    EnterpriseID: number,
    EmployerID: number,
    EmployerName: string,
    ParentCompany: number,
    PermanentRegistration: string,
    DateOfInception: Date,
    DateOfExpiry: Date
}

export interface IEmployeeDelete {
    employee_id:string;
}

export interface IEmployeeEdit {
    employee_id:string;
}

export interface IEmployeeWorkPermit{
    employee_id: number,
    PassportNo: string,
    IssueDate: Date,
    ExpiryDate: Date,
    IssuingAuthority: string,
    IssuingCountry: string,
    VisaNo: string,
    Visa_IssueDate: Date,
    Visa_ExpiryDate: Date,
    Visa_IssuingAuthority: string,
    Visa_IssuingCountry: string,
    WorkPermitNo: string,
    Work_IssueDate:Date,
    Work_ExpiryDate: Date,
    Work_IssuingAuthority: string,
    Work_IssuingCountry: string,
    WorkStartDate: Date
}


