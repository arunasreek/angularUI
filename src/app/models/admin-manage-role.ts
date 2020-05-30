export interface IManageAdminRoles {
    success: string;
    error: any;
    result: IPrevileges[];
}

export interface IPrevileges {
    id: number;
    previlege: string;
}

export interface IManagePostAdminRoles {
    role: string;
    previleges: IPrevileges[];
}

export interface IManageGetAdminRoles {
    success: string;
    error: any;
    result: IResponseRolePrevileges[];
}

export interface IResponseRolePrevileges {
    id: number;
    previlegeId: number;
    previlege: string;
}