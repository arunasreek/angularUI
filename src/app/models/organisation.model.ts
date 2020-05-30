export interface IOrgBasicDetails {
    id: number;
    orgName: string;
    orgEmailFormat: string;
    orgLogoUrl: string;
    statusId: number;
    subscriptionId: number;
    cycleId: number;
}

export interface IOrgFileTypes {
    id: number;
    orgId: number;
    fileTypeName: string;
    locationId: number;
    dataFrequencyId: number;
    brandLevelId: number;
    channelLevelId: number;
    errorThreshold: number;
    organisationFileTypeColumnsDetails: IOrgFileTypeColumnDetails[];
}

export interface IOrgFileTypeColumnDetails {
    id: number;
    columnName: string;
    columnType: string;
    nullable: boolean;
}

export interface IBusinessUnit {
    id: number;
    orgId: number;
    buName: string;
    businessUnitFile: IBusinessUnitFileTypes[];
}

export interface IBusinessUnitFileTypes {
    orgFileId: number;
    fileTypeName: string;
}

export interface IDataTypeAutoComplete {
    id: number;
    name: string;
}

export interface IAdminRoleDetails {
    success: boolean,
    error: any,
    result: IAdminRole[]
}

export interface IAdminRole {
    id: any,
    fullName: string,
    email: string,
    status: boolean,
    isInOrgRole: boolean,
    roles: any
}

export interface IOrganisationAdmin {
    OrganisationId: number;
    organisationAdminModels: IOrganisationAdminModels[];
}

export interface IOrganisationAdminModels {
    Id: string;
}

