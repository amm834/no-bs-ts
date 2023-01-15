interface Cat {
  name: string;
  age: number;
}

function makeCat(cat: Cat): Readonly<Cat> {
  return {
    ...cat,
  };
}

const cat = makeCat({
  age: 18,
  name: "Nosi",
});

console.log(cat.age);

function makeCoordinate(
  x: number,
  y: number,
  z: number,
): readonly [number, number, number] {
  return [
    x,
    y,
    z,
  ];
}

const co = makeCoordinate(1, 2, 3);

console.log(co);

const reallyConst= [1, 2, 3] as const;

