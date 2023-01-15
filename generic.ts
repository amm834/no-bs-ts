function useState<T>(initialValue: T): [() => T, (newValue: T) => void] {
    let value = initialValue;
    const set = (newValue: T) => {
        value = newValue;
    }
    return [() => value, set];
}

const [myString, setMyString] = useState<string>('Hello World');
console.log(myString()); // Hello World
setMyString('Hello TypeScript');
console.log(myString()); // Hello TypeScript


const [mynumber, setMyNumber] = useState<number>(123);
console.log(mynumber()); // 123
setMyNumber(456);
console.log(mynumber()); // 456


interface Rank<RankerItem> {
    item: RankerItem,
    rank: number
}


function ranker<RankerItem>(items: RankerItem[], rank: (item: RankerItem) => number): RankerItem[] {

    const ranks: Rank<RankerItem>[] = items.map(item => ({
        item,
        rank: rank(item)
    }));

    return ranks.sort((a, b) => a.rank - b.rank).map(rank => rank.item);
}

interface Pokemon {
    name: string,
    hp: number,
}

const pokemon: Pokemon[] = [
    {name: 'Bulbasaur', hp: 45},
    {name: 'Charmander', hp: 39},
    {name: 'Squirtle', hp: 44},
    {name: 'Caterpie', hp: 45},
];

const rankedPokemon = ranker<Pokemon>(pokemon, p => p.hp);
console.log(rankedPokemon)