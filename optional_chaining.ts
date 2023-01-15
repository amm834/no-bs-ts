interface User {
    name: string;
    info?: {
        email?: string,
    };
}

function getEmail(user: User): string {
    return user?.info?.email ?? "Cannot read email";
}

function optionalCallback(cb?: () => void) {
    cb?.();
}

getEmail({name: "John"}); // Cannot read email
getEmail({
    name: "John",
    info: {
        email: "amm@gmail.com"
    }
})

optionalCallback(() => console.log("Hello")); // Hello
optionalCallback(); // undefined