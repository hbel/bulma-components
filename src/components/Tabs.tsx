import React from "react";
import { maybe } from "tsmonads";

import { classNames, is, to } from "./utils";

interface TabsProps {
    centered?: boolean;
    right?: boolean;
    boxed?: boolean;
    size?: "small" | "medium" | "large";
    toggle?: boolean;
    rounded?: boolean;
    fullwidth?: boolean;
}

const Tabs = (props: TabsProps & React.HTMLAttributes<HTMLDivElement>) => {
    const {centered, right, boxed, className, children, size, toggle, rounded, fullwidth, ...rest} = props;
    const classes = classNames(
        "tabs",
        to("is-right", right),
        to("is-centered", centered),
        to("is-boxed", boxed),
        to("is-toggle", toggle),
        to("is-toggle-rounded", rounded),
        to("is-fullwidth", fullwidth),
        is(size),
        maybe(className)
    );
    return <div className={classes} {...rest}><ul>{children}</ul></div>;
};

export default Tabs;
