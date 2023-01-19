type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

// But we now have an undesirable error here - 'palette.red' "could" be a string.
const redComponent = palette.red.at(0);

class Person {
    accessor name:string;
    constructor(name:string) {
        this.name = name
        
}