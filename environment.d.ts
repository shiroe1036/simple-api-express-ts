declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: "development" | "production";
      PORT: number;
      PWD: string;
      URL_MONGODB: string;
      SECRETE: string;
      JWT_REFRESHE_EXPIRATION: number;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
