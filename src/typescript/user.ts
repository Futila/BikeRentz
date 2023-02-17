export interface User {
  firstname: string;
  lastaname: string;
  address: string;
  phone: string;
  email: string;
  password: string;
}

export interface UserLoginType {
  email: string;
  password: string;
}
