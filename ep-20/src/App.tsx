import './App.css'
import {FC, PropsWithChildren, useCallback} from "react";

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

function App() {

    const onListItemClick = useCallback((item: string) => {
        alert(item)
    }, [])

    return (
        <div className="App">
            <Header title="Hello World"/>
            <Body>
                Hello from body children
            </Body>
            <List items={['item 1', 'item 2', 'item 3']} onClick={onListItemClick}/>
        </div>
    )
}

export default App
