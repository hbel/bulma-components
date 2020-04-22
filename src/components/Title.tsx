import React from "react";
import { maybe } from "tsmonads";

const Title = (props: React.HTMLAttributes<any> & {level?: number}) => {
    const {className, level, ...rest} = props;
    const classes = `title is-${maybe(level).orElse(3)} ${maybe(className).orElse("")}`;
    return <h3 className={classes} {...rest}>{props.children}</h3>;
};

export default Title;
