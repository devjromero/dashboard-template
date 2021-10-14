import LoginResponseType from "../../../domain/types/login/LoginResponse.type";

export type Params = {
    email: string,
    password:string
}

export type Service = (params: Params)=> Promise<LoginResponseType>;