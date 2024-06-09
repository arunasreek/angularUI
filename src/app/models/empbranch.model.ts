export interface IEmployeeBranchPost {
      BId: Number,
      EmpId: number,
      BranchId:number,
      BranchName: string,
      ManagerName: string,
      BranchCurrency:string,
      CostCenter: boolean,
      SalesOutlet: boolean,
      Warehouse: boolean,
      StockPoint: boolean,
      CountryId: number,
      StateId: number,
      CityId:number,
      Address:string,
      LandlineNo: string,
      Fax: string,
      MobileNo: string,
      Email:string,
      Website:string,
      BranchTaxid:string,  

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


