import { Schema, model } from "mongoose";
import { Orders, User, UserAddress, UserName } from "./Users.interface";


const UserNameSchema = new Schema<UserName>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { _id: false },
);

const UserAddressSchema = new Schema<UserAddress>(
  {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  { _id: false },
);

export const OrdersSchema = new Schema<Orders>(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false },
);

const UserSchema = new Schema<User>({
  userId: { type: Number, unique: true },
  username: { type: String, unique: true },
  password: { type: String, select : false },
  fullName: UserNameSchema,
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean },
  hobbies: [{ type: String }],
  address: UserAddressSchema,
  orders: [OrdersSchema],
});

export const UserModel = model<User>("User", UserSchema);
