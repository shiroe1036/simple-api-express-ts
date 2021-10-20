declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: "development" | "production";
      PORT: 8080;
      PWD: string;
      URL_MONGODB: "mongodb://127.0.0.1:27017/tutorials";
      PORT_data: 8080;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
