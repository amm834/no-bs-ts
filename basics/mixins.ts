function createLogger() {
    return {
        log: (message: string) => console.log(message)
    };
}

const log = createLogger();
log.log("hello world");

function createClassLogger() {
    return new class {
        log(message: string) {
            console.log(message);
        }
    }
}


const classLogger = createClassLogger();
classLogger.log("hello world from class logger");


function createDatabase<T>() {
    return new class {
        private db: Record<string, T> = {};

        get(id: string): T {
            return this.db[id];
        }

        set(id: string, value: T): void {
            this.db[id] = value;
        }

        getObjects(): object {
            return this.db;
        }
    }
}

const db = createDatabase<number>();
db.set("foo", 123);
console.log(db.get("foo"));


function createObjectLogger<T>() {
    return class ObjectLogger {
        db: Record<string, T> = {};

        set(id: string, value: T): void {
            this.db[id] = value;
        }


        getObjects(): Record<string, T> {
            return this.db;
        }
    }
}

type Constructor<T> = new (...args: any[]) => T;

function mixins<T extends Constructor<{
    getObjects(): object
}>>(base: T) {
    return class extends base {
        log() {
            console.log(this.getObjects());
        }
    }
}

const objectLogger = createObjectLogger<string>();

const mixinsObjectLogger = mixins(objectLogger);
const mixinsObjectLoggerClass = new mixinsObjectLogger();
mixinsObjectLoggerClass.set("foo", "bar");
mixinsObjectLoggerClass.set("bar", "baz");
mixinsObjectLoggerClass.log();
