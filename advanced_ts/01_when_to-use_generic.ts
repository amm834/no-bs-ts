

type Animal = {
    pet: string
}

type Human = {
    name: string;
}

//  version 1.0

const getDisplayName = <TItem extends Human | Animal>(item: TItem):
    TItem extends Human ? { humanName: string } : { animalName: string } => {
    if ("pet" in item) {
        return {
            animalName: item.pet
        } as any
    }

    return {
        humanName: item.name
    } as any
}

const human = getDisplayName({
    name: "Aung Myat Moe",
})

const animal = getDisplayName({
    pet: "Nosi"
})
