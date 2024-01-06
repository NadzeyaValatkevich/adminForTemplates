export type LoginParamsType = {
    email: string,
    password: string
};

export type HomeResponseType = {
    id: number,
  email: string,
  is_active: boolean,
  is_superuser: boolean,
  is_verified: boolean
};

