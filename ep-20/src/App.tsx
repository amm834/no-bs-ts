import './App.css'
import {FC, PropsWithChildren} from "react";

interface IHeader {
    title: string
}

const Header = ({title}: IHeader) => {
    return <h1>{title}</h1>
}

const Body: FC<PropsWithChildren> = ({children}) => {
    return <div>{children}</div>
}

const List = ({items}: { items: string[] }) => {
    return <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
}

function App() {

    return (
        <div className="App">
            <Header title="Hello World"/>
            <Body>
                Hello from body children
            </Body>
            <List items={['item 1', 'item 2', 'item 3']}/>
        </div>
    )
}

export default App
