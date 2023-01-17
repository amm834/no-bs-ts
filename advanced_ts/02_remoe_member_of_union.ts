type Roles = "admin" | "user" | "guest"
type NoneAdmin = Exclude<Roles, "admin">

// this is just a re inventing of Exclude utility type
type Letters = "a" | "b" | "c"
type RemoveC<T> = T extends "c" ? never : T;
type WithoutC = RemoveC<Letters>