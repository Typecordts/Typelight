![Typelight-Transparent](https://user-images.githubusercontent.com/61085765/148261623-a3125891-1c2a-40cb-b928-2ac7f7f9ef40.png)

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
