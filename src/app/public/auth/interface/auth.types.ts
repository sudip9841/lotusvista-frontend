export interface TokenInfo {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: string;
}

export interface LoginModel {
    email: string;
    password: string;
}

export interface SignupModel extends LoginModel{
 
}