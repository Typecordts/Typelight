import chalk from "chalk";

export class TypeLightError extends TypeError {

    static create(message: string, options?: ErrorOptions) {
        let reason: string | undefined = undefined;
        let code: string | undefined = undefined;

        if (options && options.reason) {
            reason = options.reason;
        }

        if (options && options.errCode) {
            code = options.errCode.toString();
        }

        if (options && options.hasColor) {
            return new this(chalk.red(message, `\n${reason ? `Reason: ${reason}` : ""}\n${code ? `ErrCode: ${code}` : ""}`));
        } else {
            return new this(chalk.whiteBright(message, `\n${reason ? `Reason: ${reason}` : ""}\n${code ? `ErrCode: ${code}` : ""}`));
        }
    }
}

export interface ErrorOptions {
    errCode?: number | string;
    reason?: string;
    hasColor?: boolean;
}