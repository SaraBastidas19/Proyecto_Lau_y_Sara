import express from 'express';
import { submitContact, getMessages } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', submitContact);
router.get('/messages', getMessages);

export default router;
