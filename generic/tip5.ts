const getObjectHighestKeyValue = <T extends Record<string, number>>(obj: T): number => {
  return Math.max(...Object.values(obj));
}

console.log(
  getObjectHighestKeyValue({
    a: 1,
    b: 2,
    c: 3,
  })
);
