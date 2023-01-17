type TMutateFn = (num: number) => number;
const mutateArr = (arr: number[], mutate: TMutateFn) => {
    return arr.map(mutate);
}

console.log(mutateArr([1, 2, 3], (num) => num * 2));

const adder = (num: number) => {
    return (x: number) => {
        return num + x;
    }
}

const addNumber = adder(5);

console.log(addNumber(10));// 15