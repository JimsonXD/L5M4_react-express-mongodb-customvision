import axios from 'axios';

const carFinderService = async (imageBuffer: Buffer) => {
  const predictionEndpoint = process.env.PREDICTION_ENDPOINT ?? '';

  try {
    const predictionResponse = await axios.post(
      predictionEndpoint,
      imageBuffer,
      {
        headers: {
          'Prediction-Key': process.env.PREDICTION_KEY || '',
          'Content-Type': 'application/octet-stream',
        },
      }
    );

    return predictionResponse.data.predictions;
  } catch (error) {
    throw error;
  }
};

export { carFinderService };
