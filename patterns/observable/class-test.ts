import {Observable} from "./Observable";

const observable = new Observable<string>()

const unsubscribe = observable.subscribe(msg => console.log(msg))

observable.next("One")
observable.next("Two")
unsubscribe()
observable.next("Three")

class DataObservable extends Observable<string> {
    constructor() {
        super()
        this.next("Initial data")
    }

    setValue(value: string) {
        this.next(value)
    }
}

const dataObservable = new DataObservable()
const unsubscribeDataObservable = dataObservable.subscribe(msg => {
    console.log(msg)
})

dataObservable.next("hello data one")
dataObservable.next("hello data two")
dataObservable.setValue("hello form setter")
unsubscribeDataObservable()
dataObservable.next("hello data three")