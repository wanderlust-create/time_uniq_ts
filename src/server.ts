import express from "express";

// Load HTTP request logger
import morgan from "morgan";

// access .env variables
import config from "./config";

// load winston logger
import logger from "./loaders/logger";

// Routes
import api from "./api";

async function startServer() {
  const app = express();
  app.use(express.json());
  app.use(morgan("combined"));
  app.use("/", api);

  app.listen(config.PORT, () => {
    logger.info(`
      🎆 ⏰ ☎️ 🛺  my_uniq_time listening at http://localhost:${config.PORT} 🛺 ☎️ ⏰ 🎆
    `);
  });
}

startServer();
