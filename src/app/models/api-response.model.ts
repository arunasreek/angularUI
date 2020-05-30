export interface IApiResponse<T>{
    success:boolean;
    error:string;
    result:T;
}