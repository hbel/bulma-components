import { join } from "ramda";
import React from "react";
import { maybe } from "tsmonads";

interface IconProps {
    size?: "small" | "medium" | "large";
    color?: "info" | "success" | "warning" | "danger";
    icon: string;
}

const Icon = (props: IconProps & React.HTMLAttributes<HTMLDivElement>) => {
    const {size, color, icon, className, ...rest} = props;
    const classes = ["icon"];
    if (size) { classes.push(`is-${size}`); }
    if (color) { classes.push(`has-text-${color}`); }
    return <span className={join(" ", classes) + maybe(className).orElse("")} {...rest}>
        <i className={icon}/>
    </span>;
};

export default Icon;
