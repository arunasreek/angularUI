export interface IResponsePeriods {
    period: string;
    id: number;
}

export interface IDataIngestionPeriodObject {
    period: IResponsePeriods[];
}

export interface IDataIngestionGetPeriods {
    success: string;
    error: any;
    result: IDataIngestionPeriodObject;
}

export interface IResponseSampleFileColumns {
    type: string;
    campaign: string;
    outlet: string;
    test: string;
}

export interface IDataIngestionSampleFileColumnsObject {
    sampleFileColumns: IResponseSampleFileColumns[];
}

export interface IDataIngestionGetSampleFileColumns {
    success: string;
    error: any;
    result: IDataIngestionSampleFileColumnsObject;
}
export interface INewFileUploadDetails {
    fileTypeId: number;
    businessUnitId: number;
    periodId: number;
}

export interface IResponseEngineColumMappingDetails {
    engineColumMappingDetails: IResponseColumMappingDetailsWithGroupBy;
}

export interface IResponseColumMappingDetailsWithGroupBy {
    uploadedFileId: number;
    engineColumMapping: IResponseColumMappingDetails[];
}

export interface IResponseColumMappingDetails {
    columName: string;
    engineMatchedColumnName: IEngineMatchedColumnNameDetails[];
}

export interface IEngineMatchedColumnNameDetails {
    id: number;
    columName: string;
    matchedColumnName: string;
    columnOrder: number;
    // uploadedFileId: number;
}

export interface IResponseColumMappingDetailsWithoutId {
    id: number;
    columName: string;
    matchedColumnName: string;
    columnOrder: number;
    // uploadedFileId: number;
}
export interface IDataIngestionColumMappingDetailsObject {
    engineColumMappingDetails: IResponseColumMappingDetails[];
}

export interface IDataIngestionUserColumMappingDetailsObject {
    UserColumMappingDetails: IResponseColumMappingDetailsWithoutId[];
}

export interface IDataIngestionGetColumMappingDetails {
    success: string;
    error: any;
    result: IDataIngestionColumMappingDetailsObject;
}
export interface IColumMappingDetailsMatched {
    id: number;
    matchedColumnName: string;
    uploadedFileId: number;
}

export interface IDataTypeValidationLog {
    cautionType: string;
    cautionTypeId: number;
    columnName: string;
    currentData: string;
    dataCheckMasterId: number;
    dataCheckType: string;
    // dataEngineTableRecordId: number;
    expectedDataType: string;
    id: string;
    rowNumber: number;
    uploadedFileDetailsId: number;
    uploadedFileRevisionNo: number;
    ActionTaken: boolean
}

export interface IDataTypeValidation {
    dataTypeValidationCautionCount: number;
    dataTypeValidationCautionType: string;
    dataTypeValidationLog: IDataTypeValidationLog[];
    dataTypeValidationName: string;
    hasThresholdExceeded: boolean;
}

export interface IMissingValue {
    missingValueValidationName: string,
    missingValueValidationCautionType: string,
    missingValueValidationCautionCount: number,
    missingValueLog: IMissingValueLog[]
}

export interface IMissingValueLog {
    id: string,
    uploadedFileDetailsId: number,
    uploadedFileRevisionNo: number,
    dataCheckMasterId: number,
    dataCheckType: string,
    cautionTypeId: number,
    cautionType: string,
    columnName: string,
    columnType: string,
    noOfMissingValues: number,
    ActionType: number;
    missingValueAction: IMissingValueAction;
    isNullable: boolean
}

export interface IMissingValueAction {
    default: number,
    mean: string,
    median: string,
    mode: string,
    zero: number,
    unknown: string
}

export interface IErrorWarningsDetails {
    dataTypeValidation: IDataTypeValidation;
    missingValue: IMissingValue;
    outlier: IOutlier,
    duplicateValue: IDuplicateValue,
    hasThresholdExceeded: boolean;
    fileTypeName: string;
    isMissingValueNullableError: boolean,
    missingValueNullableErrorMessage: string
}

export interface IOutlier {
    outlierValidationName: string,
    outlierValidationCautionType: string,
    outlierValidationCautionCount: number,
    outlierLog: IOutlierLog[]
}

export interface IOutlierLog {
    id: number,
    uploadedFileDetailsId: number,
    uploadedFileRevisionNo: number,
    dataCheckMasterId: number,
    dataCheckType: string,
    cautionTypeId: number,
    cautionType: string,
    columnName: string,
    rowNo: number,
    columnValue: number,
    minRange: number,
    maxRange: number
}

export interface IDuplicateValue {
    duplicateValueValidationName: string,
    duplicateValueValidationCautionType: string,
    duplicateValueValidationCautionCount: number,
    duplicateValueRowSetsCount: number,
    duplicateValueLogRowSets: IDuplicateValueLogRowSets[],
    duplicateValueLogSets: IDuplicateValueLogSets[]
}

export interface IDuplicateValueLogRowSets {
    key: string;
    value: string;
}

export interface IDuplicateValueLogSets {
    duplicateRowNo: string;
    duplicateData: IDuplicateData[]
}

export interface IDuplicateData {
    setId: string,
    country: string,
    division: string,
    bu: string,
    studio: string,
    neighborhoods: string,
    brand: string,
    product: string,
    category_Code: string,
    product_Key: string
}

export interface IErrorWarningDetails {
    errorWarningsDetails: IErrorWarningsDetails;
}

export interface IErrorWarningResponse {
    success: string;
    error: any;
    result: IErrorWarningDetails;
}

export interface IFileLogResponse {
    success: boolean;
    error: any;
    result: any;
}

export interface IFileProcess {
    success: boolean;
    error: any;
    result: IFileProcessingStateDetails;
}

export interface IFileProcessingStateDetails {
    id: number,
    uploadedFileDetailsId: number,
    uploadStarted: boolean,
    uploadComplete: boolean,
    engineColumnMappingDone: boolean,
    userColumnMappingDone: boolean,
    inProcess: boolean,
    processComplete: boolean,
    uploadedFileRevisionNo: number,
    errorCount: number,
    warningCount: number,
    isFileApproved: boolean,
    isStateValid: boolean,
    isProcessValid: boolean,
    remarks: any,
    fileTypeName: string,
    columnCountValid: boolean
}

export interface ITop5Records {
    success: boolean;
    error: any;
    result: ITop5RecordsDetails;
}

export interface ITop5RecordsDetails {
    errorCount: number,
    warningCount: number,
    volumeDetails: any,
    spendDetails: any,
    shipmentsDetails: any,
    eventsDetails: IEventsDetails[],
    brandHierarchyDetails: ITop5BrandHierarchyDetails[],
    financialsDetails: any

}

export interface ITop5BrandHierarchyDetails {
    brand: string;
    bu: string;
    category_Code: string;
    country: string;
    division: string;
    neighborhoods: string;
    product: string;
    product_Key: any
    studio: string;
    uploadedFileDetailsId: number;
}


export interface IEventsDetails {
    id: string,
    uploadedFileDetailsId: number,
    evntType: string,
    evntKey: string,
    evntName: string,
    evntComponents: string,
    custEvntStrt: string,
    custEvntEnd: string,
    notes: string
}

export interface ITempTableData {
    Validations: IDataTypeValidationLog[]
}

export interface IDataTypeValidationLog {
    id: string,
    uploadedFileDetailsId: number,
    columnName: string,
    currentData: string,
    dataEngineTableRecordId: string
}

export interface IFileTypes {
    success: boolean;
    error: any;
    result: IFileTypesData;
}

export interface IFileTypesData {
    id: number,
    name: string,
    isFileUploaded: boolean,
    isDueDateApproaching: boolean,
    hasDueDateExceeded: boolean
}

export interface IApproveFileActionModel {
    FileActions: IApproveFileActionData[]
}

export interface IApproveFileActionData {
    FileId: number,
    FileState: number,
    Remarks: string,
    ProcessState: number
}

export interface IValidationsPost {
    Validations: IValidations
}

export interface IValidations {
    DataTypeValidationLog: IPostDataTypeValidationLog[],
    DuplicateValueLog: IPostDuplicateValueLog[],
    MissingValuesLog: IPostMissingValuesLog[]
}

export interface IPostDataTypeValidationLog {
    id: string,
    uploadedFileDetailsId: number,
    columnName: string,
    currentData: string,
    dataEngineTableRecordId: string
}

export interface IPostDuplicateValueLog {
    setId: string,
    updateMode: number
}

export interface IPostMissingValuesLog {
    Id: string,
    UploadedFileDetailsId: number,
    uploadedFileRevisionNo: number,
    ColumnName: string,
    ColumnType: string,
    ActionType: number
}

export interface IDubplicateSet {
    key: string,
    updateMode: number
}