# Typelight
Validation for strings, objects, numbers, and arrays.

# Examples of use
```ts
import { string, object, number, array } from "typelight";

string("hi") // Doesn't throw an error.
string(4) // Throws error.

object({ obj: "ok" });
number(4);
let arr = array([10]);
console.log(arr.toString());
console.log(err.has([10])) // Outputs true.
```