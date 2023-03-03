declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      DB_USERNAME: string;
      MONGO_SESSION_URI: string;
      MONGO_BOARD_URI: string;
      CLOUDINARY_CLOUD_NAME: string;
      CLOUDINARY_API_KEY: string;
      CLOUDINARY_SECRET: string;
    }
  }
  namespace Express {
    interface Request {
      User: {
        _id: string
        email: string
        apiKey: string
      }
    }
  }
}

export {};
