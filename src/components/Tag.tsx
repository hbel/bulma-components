import React, { HTMLAttributes } from "react";
import { maybe } from "tsmonads";

import { classNames } from "./utils";

const Tag = (props: HTMLAttributes<HTMLSpanElement>) => {
    const {children, className, ...rest} = props;
    const classes = classNames(
        "tag",
        maybe(className),
    );
    return <span className={classes} {...rest}>
        {children}
    </span>;
};

export default Tag;
