interface UserBase {
    name: string;
    email: string;
}

interface UserWithPassword {
    password: string;
}

export interface UserLogged extends UserBase {
    pk: number;
}

export interface UserLogin extends UserWithPassword {
    email: string;
}

export interface UserLoginResponse {
    access_token: string;
}

export interface UserRegister extends UserBase, UserWithPassword {}

export interface UserResponse extends UserLogged, UserBase {}
