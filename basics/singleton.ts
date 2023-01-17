class Dog {
    constructor(
        public readonly name: string,
        public readonly age: number,
    ) {
    }
}

const dog = new Dog("mg mg", 2);
console.log(dog.name)

class DogList {
    dogs: Dog[] = [];
    static instance: DogList = new DogList();

    private constructor() {
    }

    static addDog(dog: Dog): void {
        DogList.instance.dogs.push(dog);
    }
}


DogList.addDog(new Dog("mg mg", 2));
console.log(DogList.instance.dogs);