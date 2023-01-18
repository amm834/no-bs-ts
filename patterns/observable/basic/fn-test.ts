import {createObservable} from "./BaseObservableFn";

const subscribers = createObservable()

const unsub = subscribers.subscribe((msg) => console.log(msg))
subscribers.next("one")
subscribers.next("two")
unsub()
subscribers.next("three")