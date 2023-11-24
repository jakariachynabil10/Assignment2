import { Request, Response } from "express";
import { UserService } from "./Users.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const  user  = req.body;
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
      success: false,
      message: err.message,
      error: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserFromDB();

    const UserResponseCustomize = result.map((user) => ({
      username: user.username,
      fullName: user.fullName,
      age: user.age,
      email: user.email,
      address: user.address,
      orders: user.orders,
    }));

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: UserResponseCustomize,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNum = parseFloat(userId);
    const result = await UserService.getSingleUserFromDB(userIdNum);

    if (!result || (Array.isArray(result) && result.length === 0)) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
        error: {
          code: "404",
          description: "User Not Found",
        },
      });
    }

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
      message: "User fetched Successfully",
      data: UserResponseCustomize,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "User not Found",
      error: {
        code: "404",
        description: "User Not Found",
      },
    });
  }
};



const getProductFromUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNum = parseFloat(userId);
    const result = await UserService.getSingleUserFromDB(userIdNum);

    if (!result || (Array.isArray(result) && result.length === 0)) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
        error: {
          code: "404",
          description: "User Not Found",
        },
      });
    }

    const UserResponseCustomize = {
      orders: result.orders,
    }

    res.status(200).json({
      success: true,
      message: "Order fetched Successfully",
      data: UserResponseCustomize,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "User not Found",
      error: {
        code: "404",
        description: "User Not Found",
      },
    });
  }
};

const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNum = parseFloat(userId);
    const result = await UserService.getTotalPriceFromUserDB(userIdNum);

    if (!result || (Array.isArray(result) && result.length === 0)) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
        error: {
          code: "404",
          description: "User Not Found",
        },
      });
    }

    

    res.status(200).json({
      success: true,
      message: "Order fetched Successfully",
      data: {
        totalPrice: Number.isInteger(result[0]?.totalPrice)
          ? result[0]?.totalPrice
          : parseFloat(result[0]?.totalPrice.toFixed(2)) || 0,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "User not Found",
      error: {
        code: "404",
        description: "User Not Found",
      },
    });
  }
};



const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNum = parseFloat(userId);
    const updateData = req.body;
    const checkUserExists = await UserService.getSingleUserFromDB(userIdNum);

    if (
      !checkUserExists ||
      (Array.isArray(checkUserExists) && checkUserExists.length === 0)
    ) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
        error: {
          code: "404",
          description: "User Not Found",
        },
      });
    }

    const result = await UserService.updateSingleUserFromDB(
      userIdNum,
      updateData
    );

    res.status(200).json({
      success: true,
      message: "User update Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};
const addProductToUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNum = parseFloat(userId);
    const updateData = req.body;
    const checkUserExists = await UserService.getSingleUserFromDB(userIdNum);

    if (
      !checkUserExists ||
      (Array.isArray(checkUserExists) && checkUserExists.length === 0)
    ) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
        error: {
          code: "404",
          description: "User Not Found",
        },
      });
    }

    const result = await UserService.addProductToUserDB(
      userIdNum,
      updateData
    );

    res.status(200).json({
      success: true,
      message: "User update Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNum = parseFloat(userId);

    const checkUserExists = await UserService.getSingleUserFromDB(userIdNum);

    if (
      !checkUserExists ||
      (Array.isArray(checkUserExists) && checkUserExists.length === 0)
    ) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
        error: {
          code: "404",
          description: "User Not Found",
        },
      });
    }

    const result = await UserService.deleteSingleUserFromDB(userIdNum);

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  addProductToUser,
  getProductFromUser,
  getTotalPrice
};
