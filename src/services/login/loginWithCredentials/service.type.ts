
export type Params = {
    email: string,
    password:string
}

export type Service = (params: Params)=> void;