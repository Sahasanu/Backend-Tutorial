import express from "express";
import { deleteUser, getAllUsers ,getUserById, insertMany, insertOne, updateUser} from "../Controllers/users.controllers.js";

const router = express.Router();

// Routes

// Get All the Users
router.get('/', getAllUsers);

// By id 
router.get('/id',getUserById);

// Insert One
router.post('/', insertOne);

// Insert Many
router.post('/bulk', insertMany);

// Update
router.put('/update', updateUser);

// Delete User
router.delete('/delete', deleteUser);



export default router;
