// default type parameter
function createSet<T = number>() {
    return new Set<T>();
}

createSet()
//  ^?