import { fetchData } from "../lib/index.js";

const data = await fetchData("hello");
console.log(data);
