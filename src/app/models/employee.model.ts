export interface IEmployeePost {
    EmployeeId : number,
    EmployeeId1 : number,
    EmpId : number,
    BId : number,
    OId : number,
    ProjectId : number,
    EdFirstName : string,
    EdMiddleName : string,
    EdLastName : string,
    EdEmail : string,
    EdDesignation : string,
    MobileNo : string,
    PhoneNo : string,
    Ext : string,
    BloodGroup : string,
    DrivingLicenseNumber :string,
    DrivingLicenseIssueDate : Date,
    DrivingLicenseExpiryDate : Date,
    ContractStartDate : Date,
    ContractEndDate : Date,
    WorkStartDate : Date,
    DateOfBirth : Date,
    RetirementDate : Date,
    NoOfDependents : string,
    EdPreferredContactMode : number,
    EcpFirstName :string,
    EcpMiddleName : string,
    EcpLastName : string,
    EcpEmail : string,
    EcpRelation :string,
    EcpPhone : string,
    EcpFax :string,
    EcpMobileNo : string,
    EcpCountryOfResidency : string,
    EcpPreferredContactMode : string
}

export interface IEmployeeDelete {
    employee_id:string;
}

export interface IEmployeeEdit {
    employee_id:string;
}

export interface IEmployeeWorkPermit{
    EmployeeId: number,
    EmployeeId1 : number,
    PassportNo: string,
    IssueDate: Date,
    ExpiryDate: Date,
    IssuingAuthority: string,
    IssuingCountry: string,
    VisaNo: string,
    VisaIssueDate: Date,
    VisaExpiryDate: Date,
    VisaIssuingAuthority: string,
    VisaIssuingCountry: string,
    WorkPermitNo: string,
    WorkIssueDate:Date,
    WorkExpiryDate: Date,
    WorkIssuingAuthority: string,
    WorkIssuingCountry: string,
    WorkStartDate: Date
}


