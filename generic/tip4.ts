const addUser = <T>(user: T) => {
  return {
    ...user,
    id: 123,
  };
};

const user = addUser({
  name: "Mg Mg",
  email: "mail@gmail.com",
});

user;
// ^?
