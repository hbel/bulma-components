import React from "react";
import { maybe } from "tsmonads";

const Level = (props: {mobile?: boolean} & React.HTMLAttributes<HTMLDivElement>) => {
    const {className, children, mobile, ...rest} = props;
    return <div
        className={`level ${maybe(mobile).map(() => "is-mobile").orElse("")} ${maybe(className).orElse("")}`}
        {...rest}
    >
        {children}
    </div>;
};

Level.Left = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {className, children, ...rest} = props;
    return <div className={"level-left " + maybe(className).orElse("")} {...rest}>{children}</div>;
};

Level.Right = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {className, children, ...rest} = props;
    return <div className={"level-right " + maybe(className).orElse("")} {...rest}>{children}</div>;
};

Level.Item = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {className, children, ...rest} = props;
    return <div className={"level-item " + maybe(className).orElse("")} {...rest}>{children}</div>;
};

export default Level;
