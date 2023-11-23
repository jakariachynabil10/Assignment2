import { User } from "./Users.interface";
import { UserModel } from "./Users.model";



const createUserIntoDB = async (user: User) => {
    const result = await UserModel.create(user);
    return result;
  };


  export const UserService = {
    createUserIntoDB
  }