import { createServer } from "./server";
import { logger } from "./utils/logger";

console.log("here");

createServer().catch((error) => {
  logger.info(` there is an error : ${error}`);
});
