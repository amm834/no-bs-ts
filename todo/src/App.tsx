import "./App.css";
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import useTodos, { ITodo } from "./hooks/useTodos";

//   detailed html to react props are ItrinsicElements attributes
function TodoList<T>({
  items,
  render,
}: PropsWithChildren<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
> & {
  items: T[];
  render: (item: T) => ReactNode;
}) {
  return <ul>{items.map((item) => render(item))}</ul>;
}

function App() {
  const todoRef = useRef<HTMLInputElement>(null);

  const { todos, onAddTodo, onRemoveTodo } = useTodos();

  const onAddTodoItem = useCallback(() => {
    if (!todoRef.current) return;

    onAddTodo(todoRef.current.value);
    todoRef.current.value = "";
  }, [onAddTodo]);

  const onRemoveTodoItem = useCallback(
    (todo: ITodo) => {
      onRemoveTodo(todo);
    },
    [onRemoveTodo]
  );

  return (
    <main className="App">
      <input type="text" ref={todoRef} />
      <button style={{ border: "1px solid black" }} onClick={onAddTodoItem}>
        Add Todo
      </button>
      <TodoList
        items={todos}
        render={(todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => onRemoveTodoItem(todo)}>Remove</button>
          </li>
        )}
      />
    </main>
  );
}

export default App;
