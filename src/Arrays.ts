import { BaseTypes } from "./BaseTypes";
import { TypeLightError } from "./errors/TypeLightError";

class Arrays<D> extends BaseTypes<"array"> {
    public arr: D[];

    public constructor(arr: D[]) {
        super(arr, { typeObj: "array" });

        // @ts-ignore
        this.arr = this.parse() as D[];
    }

    static init<T>(arr: T[]) {
        return new this<T>(arr);
    }

    public has(things: string[] | number[]) {
        if (!things.length) {
            throw TypeLightError.create("method has() has a empty array", {
                reason: things.length.toString(),
                hasColor: true
            });
        }

        let bools: boolean[] = [];

        for (let t of things) {
            // @ts-ignore
            bools.push(this.arr.includes(t));
        }

        return bools;
    }

    public toString() {
        return this.arr.toString();
    }
}

export = Arrays.init;