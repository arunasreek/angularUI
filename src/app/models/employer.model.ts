export interface IEmployerPost {
    EpId: number,
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
export interface IFinancialSetting {
    EmpId:number;
    EmployerID: string;
    EmployerName:string;
    ParentCompany:string;
    PermanentRegistration:string;
    PrimaryFunctionalCurrency:string;
    PayPeriodType:string;
    EmployerTaxNo:string;
    EmployerPanNo:string;
    EmployerDinNo:string;
    EmployerBinNo:string;
    FinancialYearStartDate:Date;
    FinancialYearEndDate:Date;

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

export interface IOtherDetails{
    EmpId:number,
    EmployerId:string,
    EmployerName:string;
    ParentCompany:string;
    PermanentRegistration:string;
    Country:string,
    State :string,
    City :string,
    Address1:string,
    Address2 :string,
    PostBox :string,
    ZipCode :string,
    LandLine :string,
    Fax :string,
    EmailAddress:string, 
    Website :string,
    ArEmployeeId :string,
    ArFirstName:string,
    ArMiddleName :string,
    ArLastName :string,
    ArEmail :string,
    ArDesignation :string,
    ArPhone :string,
    ArFax :string,
    ArMobileNo :string,
    ArPreferredContactPerson :string,
    OcpEmployeeId :string,
    OcpFirstName :string,
    OcpMiddleName :string,
    OcpLastName :string,
    OcpEmail :string,
    OcpDesignation:string,
    OcpPhone :string,
    OcpFax :string,
    OcpMobileNo:string,
    OcpPreferredContactPerson :string
}
