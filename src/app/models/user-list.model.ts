export interface IManageUserList {
    id: number;
    fullName: string;
    email: string;
    status: boolean;
    roles: IUserRoles[];
}

export interface IUserRoles {
    id: number;
    name: string;
}

export interface IUserStatus{
    success: boolean;
    error: any;
    result:any;
}
