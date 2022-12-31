declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      DB_USERNAME: string;
      MONGO_SESSION_URI: string;
      MONGO_BOARD_URI: string;
    }
  }
  namespace Express {
    interface Request {
      apiKey: any;
    }
  }
}

export {};
