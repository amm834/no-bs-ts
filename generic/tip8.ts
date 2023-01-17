const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
    return obj[key];
}

const user = {
    name: 'John',
    email: 'john@mail.com',
    number: 123,
}

const value = getValue(user, 'number')
console.log(value);
//          ^?
