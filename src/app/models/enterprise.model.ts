export interface IEnterPriseDetailsPost{
    ep_id: string,
    EnterpriseID: string,
    EnterpriseName: string,
    ParentEnterprise: boolean,
    PermanentRegistration: string,
    DateOfInception: Date,
    DateOfExpiry: Date,
    EpId:number,
    
}

export interface IEnterPriseDataConnSettings{
    EpId:number,
    EnterpriseID:string,
    Dblocation:string,
    ApplicationLocation:string,
    BackupLocation:string,
    MailIdLocation:string
}

export interface IFinancialSetting{
    EnterpriseID:string,
    PrimaryFunctionalCurrency:string,
    FinancialYearStartDate: Date,
    FinancialYearEndDate: Date,
    PayPeriodType:string,
    EmployerTaxNo:string,
    EmployerPanNo:string,
    EmployerDinNo:string,
    EmployerBinNo:string,
    EpId:number
}

export interface IOtherDetails{
    EpId:number,
    EnterpriseID:string,
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