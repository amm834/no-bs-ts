import {PropsWithChildren, ReactNode} from "react";

type TodoListItemProps<T> = PropsWithChildren & {
    items: T[];
    render: (item: T) => ReactNode;
}

export default function TodoList<T>({items, render,}: TodoListItemProps<T>) {
    return <ul>
        {items.map((item) => render(item))}
    </ul>
}