export interface User{
  id_user : string;
  login : string;
  senha : string;
  tipo : string;
}

export interface UserCreate{
  login : string;
  senha : string;
  tipo : string;
}
export interface UserController{
  create(data: UserCreate): Promise<User>;
  findByLogin(login : string): Promise<User | null>;
  list(): Promise<User[]>;
}