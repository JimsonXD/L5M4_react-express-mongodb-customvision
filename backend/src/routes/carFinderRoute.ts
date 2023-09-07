import express from 'express';
import multer from 'multer';
import { carFinderController } from '../controllers/carFinderController'; 

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), carFinderController); 

export default router;

