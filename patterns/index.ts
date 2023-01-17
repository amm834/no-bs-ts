import { LoggerFactory } from "./abstract-factory/logger";

const logger = LoggerFactory.createLogger();
logger.info("info");
logger.error("error");
logger.debug("debug");
logger.warn("warn");