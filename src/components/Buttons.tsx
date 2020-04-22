import { join } from "ramda";
import React from "react";

interface ButtonsProps {
    size?: "small" | "medium" | "large";
    addons?: boolean;
    right?: boolean;
    centered?: boolean;
}

export const Buttons = (props: ButtonsProps & React.HTMLAttributes<HTMLDivElement>) => {
    const classes = join(" ",  ["buttons",
        props.addons ? "has-addons" : undefined,
        props.right ? "is-right" : undefined,
        props.centered ? "is-centered" : undefined,
    ]);
    return <div className={classes}>{props.children}</div>;
};

interface FieldProps {
    grouped?: boolean;
    addons?: boolean;
}

export const Field = (props: FieldProps & React.HTMLAttributes<HTMLDivElement>) => {
    const classes = join(" ",  ["buttons",
        props.addons ? "has-addons" : undefined,
        props.grouped ? "is-grouped" : undefined,
    ]);
    return <div className={classes}>{props.children}</div>;
};
