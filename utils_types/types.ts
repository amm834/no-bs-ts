type User = {
    name: string;
    email?: string;
    age: number;
    password: string;
}

// make all filed as required
type RequiredUser = Required<User>;

// make all field as optional
type PartialUser = Partial<User>;


// make "password" field as omitted field
type UserResult = Omit<User, "password">

//  pick some field
type PickEmailAndPassword = Required<Pick<User, "email" | "password">>

// make some field as optional
type ParitalPickEmailAndPassword = Partial<Pick<User, "email" | "password">>

// make some field as readonly required type
type ReadOnlyUser = Required<Readonly<User>>


// mutate readonly object with mapped type
type Mutable<T> = {
    -readonly [K in keyof T]: T[K]
}

type MutableUser = Mutable<ReadOnlyUser>

type Roles = "admin" | "user" | "guest";
type NonAdminRoles = Exclude<Roles, "admin">;
type objectKeys = keyof User;

type RoleAttributes =
    | { role: "admin", canEdit: boolean }
    | { role: "user" }
    | { role: "guest" }

// extract specific field from union type   
type AdminRole = Extract<
    RoleAttributes,
    { canEdit: boolean }
>

//  working with functions
type Func = (a: number, b: number) => string;
type FuncResult = ReturnType<Func>;
type FuncParams = Parameters<Func>;

//  working with null
type NullIncludedType = string | null | undefined | {};
type NonNullableType = NonNullable<NullIncludedType>;

// working with promise
type FuturePromise = Promise<string>;
type FutureResult = Awaited<FuturePromise>;

const userPromiseString = (): FuturePromise => Promise.resolve("Aung Myat Moe");
const str: FutureResult = await userPromiseString();


const fetchData = async () => {
    return {
        id: 123,
        user:{
            name:'Aung Myat oe'
        }
    }
}

type Result = Awaited<ReturnType<typeof fetchData>>
const data: Result = await fetchData()
data
//^?



export { }