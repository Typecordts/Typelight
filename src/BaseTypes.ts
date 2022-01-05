import { TypeLightError } from "./errors/TypeLightError";

export class BaseTypes<T extends BaseClassTypes> {
    private obj: BaseTypesAsTypes<T>;
    private options: BaseOptions;

    public constructor(obj: BaseTypesAsTypes<T>, options: BaseOptions) {
        this.obj = obj;
        this.options = options;
    }
    
    public parse(): T | T[] {
        if (this.options.typeObj === "array") {
            if (!Array.isArray(this.obj)) {
                throw TypeLightError.create(`Type ${typeof this.obj} is not a array`);
            };

            return this.obj;
        } else {
            let obj;

            if (typeof this.obj !== this.options.typeObj) {
                throw TypeLightError.create(`Type ${typeof this.obj} is not a object, string, or number`);
            };

            if (this.options.typeObj === "number") {
                // @ts-ignore
                let n = parseInt(this.obj);

                if (n.toString() === "NaN") {
                    throw TypeLightError.create(`${this.obj} is not a number!`, {
                        reason: n.toString()
                    });
                };

                obj = n;
            }

            obj = this.obj;

            // @ts-ignore
            return obj;
        }
    }
}

export interface BaseOptions {
    typeObj: BaseClassTypes;
}

export type BaseClassTypes = "string" | "object" | "number" | "array";
export type BaseTypesAsTypes<T> = string | object | number | T[];