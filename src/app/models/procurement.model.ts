export interface IPRPost {
        RequisitionId:string;
        SupplierName:string;
        SupplierAddress :string;
        CpPersonName :string;
        CpMobileNo :string;
        DateOfDelivery:Date;
        EmployerId:number;
        SupplierId :string;
        BranchId :string;
        ItemCode:string;
        ItemName:string;
        UnitOfMeasure:string;
        Quantity:string;
        QuotationId:string;
}

export interface IPRQua{
        RequisitionId :string;
        SupplierName :string;
        SupplierAddress :string;
        CpPersonName :string;
        CpMobileNo :string;
        DateOfDelivery :Date;
        QuotationId :string;
        EmployerId :number;
        SupplierId :string;
        ItemCode :string;
        ItemName :string;
        UnitOfMeasure :string;
        Quantity :string;
        Rate :string;
        Discount :string;
        TotalAmount :string;
}

export interface IPQShip{
        QuotationId :string;
        RecivedCompany :number,
        ContactPerson :string,
        Mobile :string,
        LandLine :string,
        Fax :string,
        CompanyTaxId :string,
        ModeShipment :string,
        PortOrigon :string,
        PortDestination :string,
        ShipmentTerms :string,
        DateDelivery :Date,
        CountryId:number,
        StateId :number,
        City :string,
        DeliveryAddress :string,
        DeliveryTerms :string,
        Remarks :string,
    
}

export interface IPOrder{
        QuotationId : string;
        SupplierName :string;
        SupplierAddress:string;

        CpPersonName :string;

         CpMobileNo :string;

        //  DateOfDelivery :string;
         SupplierId :string;

         EmployerId :string;

        BranchId :string;
       
    OrderId :string;
    ItemCode :string;

     ItemName :string;

     UnitOfMeasure :string;

     Rate :string;

     Discount :string;

     GstRate :string;

    TotalAmount :string;

     FinalAmount :string;

     Quantity :string;
}

export interface IPodrShipping{
        OrderId:string;
        NameOfRecComp :string;
        Country :string;
        State :string;
        City :string;
        ContactPerson :string;
        Cpmobile :string;
        Cplandline :string;
        Fax :string;
        ModeOfShipment :string;
        PortOfOrigin :string;
        PortOfDestiny :string;
        ShipmentTerms :string;
        DeliveryAddress :string;
        Remarks :string;
        DeliveryDate :string;
}
export interface IPorderInvoice{
        OrderId:string;
        InvoicingCompany :string;
        IContactperson :string;
        IMobile :string;
        ILandline:string;
        IFax :string;
        IEmail:string;
        InvoicingCompanyTaxId :string;
        IPaymentTerms:string;
        IRemarks :string;
}

export interface ISupplierInvoice{
        OrderId:string;
}