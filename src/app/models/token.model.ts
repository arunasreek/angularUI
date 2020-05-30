export interface IToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    username: string;
    issued: Date;
    expires: Date;
    name: string;
    roles: string;
    orgId: number;
    userId: string;
    error_description: string;
    orgName: string;
}