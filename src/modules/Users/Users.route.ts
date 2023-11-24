import express from "express";
import { UserController } from "./User.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:userId", UserController.getSingleUser);
router.put("/:userId", UserController.updateSingleUser);
router.delete("/:userId", UserController.deleteSingleUser);
router.put("/:userId/orders", UserController.addProductToUser);

export const UserRoutes = router;
