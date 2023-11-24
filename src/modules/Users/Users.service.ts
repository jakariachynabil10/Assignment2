import { Orders, User } from "./Users.interface";
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
  const result = await UserModel.findOne({userId})
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSingleUserFromDB = async (id: number, newData: any) => {
  const result = await UserModel.updateOne({ userId: id }, newData, {new : true});
  return result;
};

const deleteSingleUserFromDB = async (id : number) =>{
  const result = await UserModel.deleteOne({userId : id})
  return result
}

const addProductToUserDB = async (id : number, order : Orders) =>{
  const result = await UserModel.updateOne({userId : id}, {$push : {orders : order}})
  return result
}

const getTotalPriceFromUserDB = async (id : number) =>{
  const result = await UserModel.aggregate([
    {$match : {userId : id}},
    {$unwind : '$orders'},
    {
      $group : {
        _id : null,
        totalPrice : {
          $sum : {$multiply : ['$orders.price', '$orders.quantity']}
        }
      }
    }
  ])
  return result
}

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteSingleUserFromDB,
  addProductToUserDB,
  getTotalPriceFromUserDB
};
