import express from 'express';
import {dataController, getContacts} from '../controllers/dataController.js'

const dataRouter = express.Router();

// POST route to submit form data
dataRouter.post('/', dataController);

// GET route to fetch contacts
dataRouter.get('/', getContacts);

export default dataRouter;
