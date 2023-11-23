import { Request, Response } from 'express';
import { UserService } from './Users.service';
import { UserAddress, UserName } from './Users.interface';
import { Orders } from '../Orders/Order.interface';


type UserRes = {
    userId: number;
    username: string;
    fullName: UserName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address: UserAddress;
    orders?: Orders;
  };



const createUser = async (req: Request, res: Response) => {
    try {
      const { user } = req.body;
      const result = await UserService.createUserIntoDB(user);

      const UserResponseCustomize : UserRes = {
        userId : result.userId,
        username : result.username,
        fullName : result.fullName,
        age : result.age,
        email : result.email,
        isActive : result.isActive,
        hobbies : result.hobbies,
        address : result.address,
        orders : result.orders
      }
      

      res.status(200).json({
        success: true,
        message: 'User is created Successfully',
        data: UserResponseCustomize,
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err : any) {
      res.status(500).json({
        success: true,
        message: err.message,
        error: err,
      });
    }
  };


  export const UserController = {
    createUser
  }