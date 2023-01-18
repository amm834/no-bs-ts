interface ILogger {
    info(message: string): void;
    error(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
}

class DevlopmentLogger implements ILogger {
    warn(message: string): void {
        console.warn(message);
    }

    error(message: string): void {
        console.error(message);
    }

    info(message: string): void {
        console.info(message);
    }

    debug(message: string): void {
        console.debug(message);
    }
}

class ProductionLogger implements ILogger {
    error(message: string): void {
        console.error(message);
    }

    info(message: string): void {
        console.info(message);
    }

    warn(message: string): void {

    }

    debug(message: string): void {
    }
}

export class LoggerFactory {
    static createLogger(): ILogger {
        if (process.env.NODE_ENV === 'development') {
            return new DevlopmentLogger();
        } else {
            return new ProductionLogger();
        }
    }
}