import { Request, Response } from "express";
import { UserService } from "./Users.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUserIntoDB(user);

    const UserResponseCustomize = {
      userId: result.userId,
      username: result.username,
      fullName: result.fullName,
      age: result.age,
      email: result.email,
      isActive: result.isActive,
      hobbies: result.hobbies,
      address: result.address,
      orders: result.orders,
    };

    res.status(200).json({
      success: true,
      message: "User is created Successfully",
      data: UserResponseCustomize,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: err.message,
      error: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserFromDB();

    const UserResponseCustomize = result.map(user => ({
        username: user.username,
        fullName: user.fullName,
        age: user.age,
        email: user.email,
        address: user.address,
        orders : user.orders
    }));

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: UserResponseCustomize,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: err.message,
      error: err,
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
};
