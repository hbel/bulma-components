import { join, keys, map } from "ramda";
import React from "react";
import { maybe } from "tsmonads";

import { classNames } from "./utils";

type Size = "thq" | "twt" | "half" | "ont" | "onq" | "full" | "fof" | "thf" | "twf" | "onf" |
            1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Responsive {
    mobile?: Size;
    tablet?: Size;
    desktop?: Size;
    widescreen?: Size;
    fullhd?: Size;
}

interface ColumnProps {
    size?: Size | Responsive;
    offset?: Size | Responsive;
    narrow?: boolean;
}

const toSizeClass = (s: Size, modifier: string) => {
    switch (s) {
    case "thq": return `is-${modifier}three-quarters`;
    case "twt": return `is-${modifier}two-thirds`;
    case "half": return `is-${modifier}half`;
    case "ont": return `is-${modifier}one-third`;
    case "onq": return `is-${modifier}one-quarter`;
    case "full": return `is-${modifier}full`;
    case "fof": return `is-${modifier}four-fifths`;
    case "thf": return `is-${modifier}three-fifths`;
    case "twf": return `is-${modifier}two-fifths`;
    case "onf": return `is-${modifier}one-fifth`;
    default: return `is-${modifier}${s}`;
    }
};

const convertSize = (modifier: string = "") => (val: Size | Responsive): string => {
    if (val as Size) {
        return toSizeClass(val as Size, modifier);
    } else {
        return join(" ",
            map(key => toSizeClass(val[key], modifier) + "-" + key,
                keys(val)));
    }
};

const Column = (props: ColumnProps & React.HTMLAttributes<HTMLDivElement>) => {
    const {children, className, size, offset, narrow, ...rest} = props;
    const classes = classNames(
        "column",
        maybe(size).map(convertSize()),
        maybe(offset).map(convertSize("offset-")),
        maybe(narrow).map(() => "is-narrow"),
        maybe(className)
    );
    return <div className={classes} {...rest}>{children}</div>;
};

export default Column;
