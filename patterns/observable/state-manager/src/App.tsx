import './App.css'
import {createStateManager} from "./state-manager";

const useCounter = createStateManager(0)

const Counter = () => {
    const [count, setCount] = useCounter()

    return (
        <button onClick={() => setCount(count + 1)}>Clicked - {count}</button>
    )
}

function App() {

    return (
        <>
            <Counter/>
            <Counter/>
            <Counter/>
        </>
    )
}

export default App
