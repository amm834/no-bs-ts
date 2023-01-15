interface Coordinate {
    x: number;
    y: number;
}

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(x: unknown, y?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    }

    if (typeof x === 'string') {
        x.split(',').forEach((item) => {
            const [key, val] = item.split(':');
            coord[key as "x" | "y"] = +val;
        })
    } else if (typeof x === 'object') {
        coord = x as Coordinate;
    } else {
        coord = {
            x: x as number,
            y: y as number
        }
    }

    return coord;
}

console.log(parseCoordinate({x: 1, y: 2}));
console.log(parseCoordinate(1, 2));
console.log(parseCoordinate("x:1,y:2"));