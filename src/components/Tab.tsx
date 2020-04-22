import React from "react";
import { maybe } from "tsmonads";

import { classNames, to } from "./utils";

const Tab = (props: {active?: boolean} & React.HTMLAttributes<HTMLLIElement>) => {
    const {className, active, children, ...rest} = props;
    const classes = classNames(
        to("is-active", active),
        maybe(className)
    );
    return <li className={classes} {...rest}><a>{children}</a></li>;
};

export default Tab;
