import { z } from "zod";

export const UserNameSchemaValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export const UserAddressSchemaValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

export const OrdersSchemaValidation = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const UserValidation = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: UserNameSchemaValidation,
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.string().array(),
  address: UserAddressSchemaValidation,
  orders: z.array(OrdersSchemaValidation).optional(),
});

export default UserValidation;
