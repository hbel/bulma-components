import React, { AnchorHTMLAttributes } from "react";
import { maybe } from "tsmonads";
import { classNames, is, to } from "./utils";
import { Size, Color } from "./constants";

export interface ButtonProps {
    type?: Color | "link";
    color?: "white" | "light" | "dark" | "black" | "text";
    size?: Size;

    onClick?: ((event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void) |
             (() => void);

    fullwidth?: boolean;
    inverted?: boolean;
    outlined?: boolean;
    rounded?: boolean;
    loading?: boolean;
    static?: boolean;
    disabled?: boolean;

    anchor?: boolean;
}

export const Button = (props: ButtonProps & React.HTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<any>) => {
    const {className, type, ...rest} = props;
    const classes = classNames(
        "button",
        maybe(className),
        is(type),
        is(props.color),
        is(props.size),
        to(`is-fullwidth`, props.fullwidth),
        to(`is-.inverted`, props.inverted),
        to(`is-outlined`, props.outlined),
        to(`is-rounded`, props.rounded),
        to(`is-loading`, props.loading),
        to(`is-static`, props.static),
        to(`is-disabled`, props.disabled)
    );
    return props.anchor ?
        <a className={classes} onClick={props.onClick} {...rest}>{props.children}</a> :
        <button className={classes} onClick={props.onClick} {...rest}>{props.children}</button>;
};
