import {useCounter} from "./UseCounter";

export const Counter = () => {
    const [count, setCount] = useCounter()

    return (
        <button onClick={() => setCount(count + 1)}>Clicked - {count}</button>
    )
}