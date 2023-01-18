import {useEffect, useState} from "react";

function createObservable<TMessageType>() {
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


export function createStateManager<TInitialValue>(initialValue: TInitialValue) {
    const subscribers = createObservable<TInitialValue>()

    return () => {
        const [value, setValue] = useState<TInitialValue>(initialValue)

        useEffect(() => subscribers.subscribe(setValue), [])

        return [
            value,
            (value: TInitialValue) => {
                subscribers.next(value)
            }
        ] as const
    }
}