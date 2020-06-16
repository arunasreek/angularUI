export interface IEmployeePost {
    employee_id : number,
    EmployeeID : number,
    emp_id : number,
    b_id : number,
    o_id : number,
    project_id : number,
    ED_FirstName : string,
    ED_MiddleName : string,
    ED_LastName : string,
    ED_Email : string,
    ED_Designation : string,
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
    ED_PreferredContactMode : number,
    ECP_FirstName :string,
    ECP_MiddleName : string,
    ECP_LastName : string,
    ECP_Email : string,
    ECP_Relation :string,
    ECP_Phone : string,
    ECP_Fax :string,
    ECP_MobileNo : string,
    ECP_CountryOfResidency : string,
    ECP_PreferredContactMode : string
}

export interface IEmployeeDelete {
    employee_id:string;
}

export interface IEmployeeEdit {
    employee_id:string;
}


