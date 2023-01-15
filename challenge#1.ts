interface House {
    name: string;
    planets: string | string[];
}

interface HouseWithID extends House {
    id: number;
}

type TFilterFn = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];
function findHouses(
    houses: string,
    filter: TFiler
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
    houses: House[],
    filter: TFilterFn
): HouseWithID[];
function findHouses(arg1: unknown, filter?: TFilterFn): HouseWithID[] {
    const houses = Array.isArray(arg1) ? arg1 : JSON.parse(arg1);

    const housesWithID = houses.map((house, index) => ({
        ...house,
        id: index,
    }));
    return filter ? housesWithID.filter(filter) : housesWithID;
}


const houses = [
    {"name": "Atreides", "planets": "Calladan"},
    {"name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"]},
    {"name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"]}
]


console.log(
    findHouses(JSON.stringify(houses), ({name}) => name === "Atreides")
);

console.log(findHouses(houses, ({name}) => name === "Harkonnen"));
console.log(findHouses(houses));
console.log(findHouses(JSON.stringify(houses)));