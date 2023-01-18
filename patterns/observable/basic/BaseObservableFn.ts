export function createObservable<TMessageType>() {
    const subscribers: Set<(msg: TMessageType) => void> = new Set();

    return {

        subscribe(subscriber: (msg: TMessageType) => void) {
            subscribers.add(subscriber);

            return () => {
                subscribers.delete(subscriber);
            }
        },

        next(msg: TMessageType) {
            subscribers.forEach(subscriber => subscriber(msg));
        }
    }
}