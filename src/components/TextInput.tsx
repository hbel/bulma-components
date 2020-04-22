import React from "react";
import { Size, Color } from "./constants";
import { classNames, is, to } from "./utils";
import { maybe } from "tsmonads";

interface Props {
    type: "text" | "password" | "email" | "tel" | "number";
    onChange: (newValue: string) => void;
    defaultValue?: string;
    placeHolder?: string;
    size?: Size;
    color?: Color;
    rounded?: boolean;
    loading?: boolean;
    readOnly?: boolean;
    static?: boolean;
    step?: number;
    min?: number;
    max?: number;
}

const TextInput = (props: Props & React.HTMLAttributes<HTMLInputElement>) => {
    const { className, type, color, size, placeHolder, defaultValue, step, min, max } = props;
    const [val, setVal] = React.useState(defaultValue ?? "");
    const classes = classNames(
        "button",
        maybe(className),
        is(color),
        is(size),
        to(`is-loading`, props.loading),
        to(`is-readonly`, props.readOnly),
        to(`is-static`, props.static),
        to(`is-rounded`, props.rounded)
    );

    return <div className="field">
        <div className="control">
            <input
                className={classes}
                type={type} 
                placeholder={placeHolder}
                value={val}
                step={step}
                min={min}
                max={max}
                onChange={(e) => {
                    setVal(e.target.value);
                    props.onChange(e.target.value);
                }}
                readOnly={props.readOnly}
            />
        </div>
    </div>;
};

export default TextInput;
