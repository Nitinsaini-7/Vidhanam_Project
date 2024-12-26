// backend/routes/users.js
import express from 'express';
import userModel from '../models/userModel.js';
const usersDataRouter = express.Router();

// Get all users
usersDataRouter.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
      } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
      }
});

export default usersDataRouter;
