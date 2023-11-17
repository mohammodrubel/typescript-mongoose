import mongoose from 'mongoose';
import app from './app';
import config from './app/config/config';

async function main() {
  try {
    if (!config.port || !config.mongooseUrl) {
      throw new Error('Missing configuration. Please check your .env file.');
    }

    await mongoose.connect(config.mongooseUrl);
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Error  starting the server:', error);
  }
}

main();
