const makeFetch = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json());
};

makeFetch<{
  name: string;
  email: string;
  aget: number;
}>("/api/users")
  .then((res) => {
    console.log(res);
    //          ^?
  });
