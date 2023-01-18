interface ILogger {
    info(message: string): void;

    error(message: string): void;

    warn(message: string): void;

    debug(message: string): void;
}

const developmentLogger = (): ILogger => ({
    warn(message: string): void {
        console.warn(message);
    },

    error(message: string): void {
        console.error(message);
    },

    info(message: string): void {
        console.info(message);
    },

    debug(message: string): void {
        console.debug(message);
    }

})

const productionLogger = (): ILogger => ({
    error(message: string): void {
        console.error(message);
    },
    info(message: string): void {
        console.info(message);
    },
    warn(message: string): void {

    },
    debug(message: string): void {
    }
})

export const createLogger = (): ILogger => {
    if (process.env.NODE_ENV === 'production') {
        return productionLogger();
    } else {
        return developmentLogger();
    }
}