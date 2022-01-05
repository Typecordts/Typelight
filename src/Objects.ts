import { BaseTypes } from "./BaseTypes";

class Objects<T> extends BaseTypes<"object"> {
    public object: string | object;

    public constructor(obj: object) {
        super(obj, { typeObj: "object" });

        this.object = this.parse();
    }

    static init<D>(obj: D) {
        return new this<D>(obj as Object);
    }

    public array() {
        let arr: { [key: string | number ]: string | object | number }[] = [];

        for (let [key, value] of Object.entries(this.object)) {
            arr.push({ key, value });
        }

        return arr;
    }

    public toString() {
        return this.object.toString();
    }
}

export = Objects.init;