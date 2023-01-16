import './App.css'
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {addTodo, ITodo, removeTodo} from "./features/todoSlice";
import TodoList from "./TodoList";

function App() {

    const inputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()

    const todos = useSelector((state: RootState) => state.todos.todos)


    function onAddTodo() {
        const enteredText = inputRef.current!.value;
        dispatch(addTodo({
            title: enteredText,
            completed: false,
            id: Math.random()
        }))
    }

    return (
        <div className="App">
            <input type="text" ref={inputRef}/>
            <button onClick={onAddTodo}>Add</button>

            <TodoList items={todos} render={todo => {
                return (
                    <li key={todo.id}>
                        <span>{todo.title}</span>
                        <button onClick={() => dispatch(removeTodo(todo))}>Delete
                        </button>
                    </li>
                )
            }}/>
        </div>
    )
}

export default App
