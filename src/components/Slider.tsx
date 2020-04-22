import React from "react";
import { Size, Color } from "./constants";
import { classNames, is, to } from "./utils";
import { maybe } from "tsmonads";

interface Props {
    onChange: (newValue: number) => void;
    defaultValue?: number;
    size?: Size;
    color?: Color;
    fullWidth?: boolean;
    disabled?: boolean;
    circle?: boolean;
    step: number;
    min: number;
    max: number;
}

const Slider = (props: Props & React.HTMLAttributes<HTMLInputElement>) => {
    const { className, color, size, defaultValue, step, min, max } = props;
    const [val, setVal] = React.useState(defaultValue ?? 0);
    const classes = classNames(
        "slider",
        maybe(className),
        is(color),
        is(size),
        to(`is-fullwidth`, props.fullWidth),
        to(`is-circle`, props.circle),
    );

    return <input
        className={classes}
        type="range" 
        value={val}
        step={step}
        min={min}
        max={max}
        onChange={(e) => {
            setVal(parseFloat(e.target.value));
            props.onChange(parseFloat(e.target.value));
        }}
        disabled={props.disabled}
    />;
};

export default Slider;
