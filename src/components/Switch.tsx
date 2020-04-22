import React from "react";
import { Size, Color } from "./constants";
import { classNames, is, to } from "./utils";
import { maybe } from "tsmonads";

interface Props {
    label: string;
    onChange: (newValue: boolean) => void;
    defaultValue?: boolean;
    size?: Size;
    color?: Color;
    rounded?: boolean;
    thin?: boolean;
    outlined?: boolean;
    rightToLeft?: boolean;
    disabled?: boolean;
    id: string;
}

const Switch = (props: Props & React.HTMLAttributes<HTMLInputElement>) => {
    const { className, color, size, defaultValue, label, id } = props;
    const [val, setVal] = React.useState(defaultValue ?? false);
    const classes = classNames(
        "switch",
        maybe(className),
        is(color),
        is(size),
        to(`is-thin`, props.thin),
        to(`is-outlined`, props.outlined),
        to(`is-rounded`, props.rounded),
        to("is-rtl", props.rightToLeft),
        to("is-disabled", props.disabled)
    );

    return <div className="field">
        <input
            id={id}
            className={classes}
            type="checkbox" 
            checked={val}
            onChange={(e) => {
                setVal(e.target.value === "true");
                props.onChange(e.target.value === "true");
            }}
            disabled={props.disabled}
        />
        <label htmlFor={id}>{label}</label>
    </div>;
};

export default Switch;
