export type LoginParamsType = {
    email: string,
    password: string
};

export type LoginResponseType = {
  email: string,
  password: string
}

export type AuthResponseType = {
    id: number,
  email: string,
  is_active: boolean,
  is_superuser: boolean,
  is_verified: boolean
};

 

