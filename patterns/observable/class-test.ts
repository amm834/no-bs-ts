import {Observable} from "./Observable";

const observable = new Observable<string>()

const unsubscribe = observable.subscribe(msg => console.log(msg))

observable.next("One")
observable.next("Two")

unsubscribe()

observable.next("Three")