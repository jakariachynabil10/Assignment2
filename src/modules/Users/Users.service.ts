import { User } from "./Users.interface";
import { UserModel } from "./Users.model";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  const result = await UserModel.aggregate([
    {
      $match: { userId: userId },
    },
  ]);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSingleUserFromDB = async (id: number, newData: any) => {
  const result = await UserModel.updateOne({ userId: id }, newData);

  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
};
