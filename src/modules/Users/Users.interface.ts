import { Model } from "mongoose";


export type UserName = {
  firstName: string;
  lastName: string;
};

export type UserAddress = {
  street: string;
  city: string;
  country: string;
};

export type Orders = 
  {
    productName : string,
    price : number,
    quantity : number

  }


export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: UserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: UserAddress;
  orders?: Orders[];
};


export interface IUserModel extends Model<User> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId : number) : Promise<User | null>
}