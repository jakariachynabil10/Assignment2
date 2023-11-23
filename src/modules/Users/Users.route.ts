import express from 'express';
import { UserController } from './User.controller';


const router = express.Router();

router.post('/create-user', UserController.createUser)
router.get('/', UserController.getAllUsers)
router.get('/:userId', UserController.getSingleUser)
router.put('/:userId', UserController.updateSingleUser)

export const UserRoutes = router;
