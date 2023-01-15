import './App.css'
import {FC, PropsWithChildren, useCallback, useEffect, useReducer, useRef, useState} from "react";

interface IHeader {
    title: string
}

const Header = ({title}: IHeader) => {
    return <h1>{title}</h1>
}

const Body: FC<PropsWithChildren> = ({children}) => {
    return <div>{children}</div>
}

const List = ({items, onClick}: { items: string[], onClick?: (item: string) => void }) => {
    return <ul>
        {items.map((item, index) =>
            <li
                key={index}
                onClick={() => onClick?.(item)}
            >
                {item}
            </li>)}
    </ul>
}

const Name = ({name}: IUser) => {
    return <div>{name}</div>
}

interface IUser {
    name: string
}

function App() {

    const [name, setName] = useState<IUser | null>(null)

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setName(data))
    }, [])


    const onListItemClick = useCallback((item: string) => {
        alert(item)
    }, [])


    let todoRef = useRef<HTMLInputElement>(null);

    type TTodo = {
        id: number,
        name: string,
        done: boolean
    }
    type TActionTypes = { type: "ADD" | "REMOVE", payload: TTodo }


    const [todos, dispatch] = useReducer((state: TTodo[], action: TActionTypes) => {
        switch (action.type) {
            case  "ADD":
                return [
                    ...state,
                    {id: state.length + 1, name: action.payload.name, done: false}
                ] as TTodo[]
            case "REMOVE":
                return state.filter(todo => todo.id !== action.payload.id) as TTodo[]
            default:
                throw new Error("Unknown action type")
        }
    }, [])

    const onRemoveTodo = useCallback((todo: TTodo) => {
        dispatch({type: "REMOVE", payload: todo})
    }, [])

    const onTodoAdd = useCallback(() => {
        if (todoRef.current) {
            dispatch({type: "ADD", payload: {id: 0, name: todoRef.current.value, done: false}})
            todoRef.current.value = ""
        }
    }, [])

    return (
        <div className="App">
            <Header title="Hello World"/>
            <Body>
                Hello from body children
            </Body>
            <List items={['item 1', 'item 2', 'item 3']} onClick={onListItemClick}/>

            {name && <Name name={name?.name}/>}


            <div>
                <h1>Todo</h1>
                <input type="text" ref={todoRef}/>
                <button style={{border: '1px solid black'}} onClick={onTodoAdd}>Add Todo</button>
                <ul>{todos.map(todo => <li key={todo.id}>{todo.name}
                    <button onClick={() => onRemoveTodo(todo)}>Remove</button>
                </li>)}</ul>
            </div>
        </div>
    )
}

export default App
