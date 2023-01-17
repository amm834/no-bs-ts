'use client'
import React, {useEffect, useRef, useState} from 'react';

type User = {
    name: string;
}

const useNumber = () => {
    const [number, setNumber] = useState(0)

    return [number, setNumber] as const;
}

const DefaultProp = ({count = 0}: { count?: number; }) => {
    return <div>{count}</div>
}

const Component = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [user, setUser] = useState<User>({} as User)

    const [state, setState] = useNumber()

    useEffect(() => {
        setUser({
            name: "Mg Mg",
        })
    }, [])

    return (
        <div ref={ref}>
            {JSON.stringify(user, null, 2)}
            <DefaultProp/>
        </div>
    );
};

export default Component;