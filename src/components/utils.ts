import { join, map } from "ramda";
import { clean, maybe, Maybe } from "tsmonads";

export const debug = <T>(t: T) => { console.info(t); return t; };

export const is = (cl?: string) => maybe(cl).map(s => `is-${s}`);
export const has = (cl?: string) => maybe(cl).map(s => `has-${s}`);
export const to = (name: string, cl?: boolean) => maybe(cl).map(b => b ? name : "");
export const classNames = (...cns: Array<string | Maybe<string>>) => {
    const classes =  clean(map(x => typeof(x) === "string" ? maybe(x) : x, cns));
    return join(" ", classes);
};
