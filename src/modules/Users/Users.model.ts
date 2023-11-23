import { Schema, model } from "mongoose";
import { User, UserAddress, UserName } from "./Users.interface";
import { Orders } from "../Orders/Order.interface";

const UserNameSchema = new Schema<UserName>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { _id: false }
);

const UserAddressSchema = new Schema<UserAddress>(
  {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  { _id: false }
);

const OrdersSchema = new Schema<Orders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const UserSchema = new Schema<User>({
  userId: { type: Number, unique : true},
  username: { type: String, unique : true },
  password: { type: String },
  fullName: UserNameSchema,
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean },
  hobbies: [{ type: String }],
  address: UserAddressSchema,
  orders: OrdersSchema,
});

export const UserModel = model<User>("User", UserSchema);
