import { createLogger } from "./logger-fn";

const logger = createLogger();
logger.info("info");
logger.error("error");
logger.warn("warn");
logger.debug("debug");
