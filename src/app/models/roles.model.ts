export interface IRoles {
    id: number;
    name: string;
}

export interface IAllRoles {
    success: string;
    error: any;
    result: IRoles[];
}