"use strict";// abstract-factory/logger.ts
var DevlopmentLogger = class {
  warn(message) {
    console.warn(message);
  }
  error(message) {
    console.error(message);
  }
  info(message) {
    console.info(message);
  }
  debug(message) {
    console.debug(message);
  }
};
var ProductionLogger = class {
  error(message) {
    console.error(message);
  }
  info(message) {
    console.info(message);
  }
  warn(message) {
  }
  debug(message) {
  }
};
var LoggerFactory = class {
  static createLogger() {
    if (process.env.NODE_ENV === "development") {
      return new DevlopmentLogger();
    } else {
      return new ProductionLogger();
    }
  }
};

// index.ts
var logger = LoggerFactory.createLogger();
logger.info("info");
logger.error("error");
logger.debug("debug");
logger.warn("warn");
