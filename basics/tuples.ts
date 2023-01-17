const useState = (initialValue: string): [() => string, (value: string) => void] => {
    let state = initialValue;
    return [() => state, (value: string) => state = value];
}

const [state, setState] = useState('initial value');
console.log(state()); // initial value
setState('new value');
console.log(state()); // new value