import { BaseTypes, BaseTypesAsTypes } from "./BaseTypes";
import { TypeLightError } from "./errors/TypeLightError";

class Numbers extends BaseTypes<"number"> {
    public num: number;
    
    public constructor(num: number) {
        super(num, { typeObj: "number" });

        // @ts-ignore
        this.num = this.parse() as number;
    }

    static init(num: number) {
        return new this(num);
    }

    public compare(n: number | number[]) {

        if (!n) {
            throw TypeLightError.create(`param n in Numbers#compare() is empty`, {
                errCode: "EMPTY_ARRAY",
                hasColor: true
            });
        };

        if (Array.isArray(n)) {
            let bools: boolean[] = [];

            for (let num of n) {
                bools.push(this.num === num);
            }

            return bools;
        }

        return this.num === n;
    }

    public toString() {
        return this.num.toString();
    }
} 

export = Numbers.init;