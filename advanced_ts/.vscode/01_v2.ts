

type Animal = {
    pet: string
}

type Human = {
    name: string;
}

//  version 2.0

type AnimalOrHuman<T> = T extends Human ? { humanName: string } : { animalName: string }

const getDisplayName = <TItem extends Human | Animal>(item: TItem): AnimalOrHuman<TItem> => {
    if ("pet" in item) {
        return {
            animalName: item.pet
        } as AnimalOrHuman<TItem>
    }

    return {
        humanName: item.name
    } as AnimalOrHuman<TItem>
}

const human = getDisplayName({
    name: "Aung Myat Moe",
})

const animal = getDisplayName({
    pet: "Nosi"
})
