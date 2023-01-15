export const fetchData = (url: string): Promise<string> => Promise.resolve("hello")

export const getNames = (saltatioin: string, ...names: string[]): string => {
    return `${saltatioin} ${names.join(" ")}`
}

export const getName = (user: { first?: string, last?: string }): string => {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`
}