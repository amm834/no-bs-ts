import { LoggerFactory } from "./logger-oop";

const logger = LoggerFactory.createLogger();
logger.info("info");
logger.error("error");
logger.warn("warn");
logger.debug("debug");
