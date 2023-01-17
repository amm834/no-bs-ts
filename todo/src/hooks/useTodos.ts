import {useCallback, useReducer} from "react";


export interface ITodo {
    id: number,
    name: string,
    done: boolean
}

interface IActionTypes {
    type: "ADD" | "REMOVE";
    payload: ITodo;
}

export default function useTodos(initialTodos?: ITodo[]) {

    const [todos, dispatch] = useReducer(
        (state: ITodo[], action: IActionTypes) => {
            switch (action.type) {
                case  "ADD":
                    return [
                        ...state,
                        {id: state.length + 1, name: action.payload.name, done: false}
                    ] as ITodo[]
                case "REMOVE":
                    return state.filter(todo => todo.id !== action.payload.id) as ITodo[]
                default:
                    throw new Error("Unknown action type")
            }
        },
        initialTodos || [])


    const onAddTodo = useCallback((name: string) => {
        dispatch({type: "ADD", payload: {id: 0, name, done: false}})
    }, [])


    const onRemoveTodo = useCallback((todo: ITodo) => {
        dispatch({type: "REMOVE", payload: todo})
    }, [])

    return {
        todos,
        onAddTodo,
        onRemoveTodo,
    }
}