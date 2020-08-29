export interface IEmployeeBranchPost {
    b_id: number,
    EmployerId: number,
     BranchId:number,
      BranchName: string,
      manager_name: string,
      BranchCurrency:string,
      cost_center: string,
      sales_outlet: string,
      warehouse: string,
      stock_point: String,
      country_id: string,
      state_id: string,
      city_id:string,
      Address:string,
      Landline: string,
      Fax: string,
      mobile_no: string,
      EmailAddress:string,
      Website:string,
      branch_taxid:string,  

}

export interface IEmployeeBranchDelete {
    BranchId:string;
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


