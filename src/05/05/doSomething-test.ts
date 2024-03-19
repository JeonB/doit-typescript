import { doSomething } from "./doSomething";

const [result, ErrorMessage] = doSomething();
console.log(result, ErrorMessage); // false 'Some error occurred...'
