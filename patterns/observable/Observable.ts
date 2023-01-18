export class Observable<TMessageType> {
    private subscribers: Set<(msg: TMessageType) => void> = new Set();


    //  @param subscriber - the subscriber to add
    //  @returns a function that unsubscribes the subscriber
    subscribe(subscriber: (msg: TMessageType) => void) {
        this.subscribers.add(subscriber);

        return () => {
            this.subscribers.delete(subscriber);
        }
    }


    //  @param msg - the message to send to all subscribers
    next(msg: TMessageType) {
        this.subscribers.forEach(subscriber => subscriber(msg));
    }
}