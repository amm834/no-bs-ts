import './App.css'
import React, {useCallback, useRef} from "react";
import useTodos, {ITodo} from "./hooks/useTodos";


function App() {
    const todoRef = useRef<HTMLInputElement>(null);

    const {todos, onAddTodo, onRemoveTodo} = useTodos();


    const onAddTodoItem = useCallback(() => {
        if (!todoRef.current) return

        onAddTodo(todoRef.current.value)
        todoRef.current.value = ""
    }, [onAddTodo])


    const onRemoveTodoItem = useCallback((todo: ITodo) => {
        onRemoveTodo(todo)
    }, [onRemoveTodo])


    return (
        <div className="App">

            <div>
                <h1>Todo</h1>
                <input type="text" ref={todoRef}/>
                <button style={{border: '1px solid black'}} onClick={onAddTodoItem}>Add Todo</button>
                <ul>{todos.map(todo => <li key={todo.id}>{todo.name}
                    <button onClick={() => onRemoveTodoItem(todo)}>Remove</button>
                </li>)}</ul>
            </div>

        </div>
    )
}

export default App
