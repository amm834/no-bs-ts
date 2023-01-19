type Attributes = {
  color: string;
  [data: `data-${string}`]: string;
};

const attributes: Attributes = {
  color: "red",
  "data-foo": "bar",
  "data-baz": "qux",
};
