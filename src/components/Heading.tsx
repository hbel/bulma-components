import React from "react";
import { maybe } from "tsmonads";

interface Props {
    level?: number;
    subtitle?: boolean;
}

const Heading = (props: Props & React.HTMLAttributes<HTMLHeadElement>) => {
    const {level = 1, subtitle} = props;
    const classes = `${maybe(subtitle).map(() => "sub").orElse("")} title is-${level}`;
    switch (level) {
    case 1: return <h1 className={classes}>{props.children}</h1>;
    case 2: return <h2 className={classes}>{props.children}</h2>;
    case 3: return <h3 className={classes}>{props.children}</h3>;
    case 4: return <h4 className={classes}>{props.children}</h4>;
    default: return <h5 className={classes}>{props.children}</h5>;
    }
};

export default Heading;
