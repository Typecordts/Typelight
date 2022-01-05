import { BaseTypes, BaseTypesAsTypes } from "./BaseTypes";

class Strings extends BaseTypes<"string"> {
    public object: BaseTypesAsTypes<"string">;

    public constructor(obj: string) {
        super(obj, { typeObj: "string" });

        this.object = this.parse();
    }
    
    static init(str: string) {
        return new this(str);
    }

    public getAsSplit(splitter: string) {
        return this.object.toString().split(splitter);
    }

    public replaceAll(str: string, as: string) {
        return this.object.toString().replaceAll(str, as);
    }
}

export = Strings.init;