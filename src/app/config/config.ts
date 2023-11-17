import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

interface Config {
  port: string | undefined;
  mongooseUrl: string | undefined;
}

const config: Config = {
  port: process.env.PORT,
  mongooseUrl: process.env.MONGODB_INFORMATION,
};

export default config;
