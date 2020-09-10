export interface IItemGroupPost {
    itemgroup_id: number,
    ItemGroupID: string,
    ItemGroupDescription: string,
}

export interface IItemCategoryPost {
    itemcat_id: number,
    ItemCategoryID: string,
    ItemCategoryDescription: string,
}
export interface IStockItemPost {
    stockitem_id: number,
    ItemCode: any,
    ItemName: any,
    itemgroup_id:number,
    itemcat_id:string,//$scope.ItemCategory,
    UnitOfMeasure: string,
    Rate: number,
    SIStatus: string,
    GSTRate: string,
    GST_Rate_Effective_Date: Date,
    OpeningBalance:string,
    ReorderLevelQuantity:string,
    Closing_Balance: string,
}