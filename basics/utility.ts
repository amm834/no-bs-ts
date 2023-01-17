interface User {
  id: number;
  name: string;
  email?: string;
  password?: string;
}

function createUser(user: User, userOptional?: Partial<User>): User {
  return {
    ...user,
    ...userOptional,
  };
}

console.log(
  createUser({
    id: 1,
    name: "John",
    email: "email@mail.com",
    password: "password",
  }, {
    name: "John Doe",
  }),
);

type RequiredUser = Required<User>;

type JustEmailAndPassword = Pick<User, "email" | "name">;

type UserWithoutId = Omit<User, "id">;

const mapUserById = (users: User[]): Record<User["id"], UserWithoutId> => {
  return users.reduce((acc, user) => {
    const { id, ...rest } = user;
    return {
      ...acc,
      [id]: rest,
    };
  }, {});
};

console.log(mapUserById([
  { id: 1, email: "foo@mail.com", name: "foo" },
  { id: 2, email: "bar@mail.com", name: "bar" },
  { id: 3, email: "hello@mail.com", name: "hello" },
]));
