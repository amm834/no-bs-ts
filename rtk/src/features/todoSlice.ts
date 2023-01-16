import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export interface ITodoState {
    todos: ITodo[]
}

const initialState: ITodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    },
})


export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer