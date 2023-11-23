import express from 'express';
import { UserController } from './User.controller';


const router = express.Router();

router.post('/create-user', UserController.createUser)

export const UserRoutes = router;
