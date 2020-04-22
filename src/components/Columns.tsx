import { join, keys, map } from "ramda";
import React from "react";
import { maybe, Maybe } from "tsmonads";

import { classNames } from "./utils";

interface Responsive {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    widescreen?: number;
    fullhd?: number;
}

interface ColumnsProps {
    mobile?: boolean;
    gap?: number | Responsive;
    centered?: boolean;
    vcentered?: boolean;
    multiline?: boolean;
}

const transformGap = (gap: Maybe<number | Responsive>): Maybe<string> => gap.map(g => {
    if (g as number) {
        return `is-${g}`;
    } else {
        return join(" ",
            map(key => `is-${g[key]}-${key}`,
                keys(g)));
    }
});

const Columns = (props: ColumnsProps & React.HTMLAttributes<HTMLDivElement>) => {
    const {children, className, mobile, gap, centered, vcentered, multiline, ...rest} = props;
    const classes = classNames(
        "columns",
        maybe(mobile).map(() => "is-mobile"),
        transformGap(maybe(gap)),
        maybe(centered).map(() => "is-centered"),
        maybe(vcentered).map(() => "is-vcentered"),
        maybe(multiline).map(() => "is-multiline"),
        maybe(className)
    );
    return <div className={classes} {...rest}>{children}</div>;
};

export default Columns;
