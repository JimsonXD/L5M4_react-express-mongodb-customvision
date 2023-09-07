import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';
import multer from 'multer';
import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cars';
let db: Db;

(async () => {
  try {
    const client = await MongoClient.connect(MONGODB_URI);
    db = client.db();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();


app.post('/api/upload', upload.single('image'), async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  const image = req.file.buffer;
  const predictionEndpoint = process.env.PREDICTION_ENDPOINT ?? '';

  try {
    const predictionResponse = await axios.post(
      predictionEndpoint,
      image,
      {
        headers: {
          'Prediction-Key': process.env.PREDICTION_KEY,
          'Content-Type': 'application/octet-stream',
        },
      }
    );

    const predictions = predictionResponse.data.predictions;
    if (predictions.length > 0) {
      const predictedType = predictions[0].tagName;

      const collectionName = predictedType;
      const collection = db.collection(collectionName);
      const filteredCars = await collection.find({}).toArray();

      console.log('Filtered Cars:', filteredCars); 

      res.json({ filteredCars });
    } else {
      return res.status(404).json({ message: 'No predictions found.' });
    }
  } catch (error) {
    console.error('Error making prediction:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
