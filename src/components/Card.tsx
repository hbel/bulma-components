import React from "react";
import { maybe } from "tsmonads";
import { Button, ButtonProps } from "./Button";

const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {children, className, ...rest} = props;
    const classes = `card ${maybe(className).orElse("")}`;
    return <div className={classes} {...rest}>{children}</div>;
};

Card.Header = (props: React.HTMLAttributes<HTMLHeadElement>) => {
    const {children, className, ...rest} = props;
    const classes = `card-header ${maybe(className).orElse("")}`;
    return <header className={classes} {...rest}>{children}</header>;
};

Card.HeaderTitle = (props: {centered: boolean} & React.HTMLAttributes<HTMLDivElement>) => {
    const {children, centered, className, ...rest} = props;
    const classes = `card-header-title ${centered ? "is-centered " : ""}${maybe(className).orElse("")}`;
    return <div className={classes} {...rest}>{children}</div>;
};

Card.HeaderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {children, className, ...rest} = props;
    const classes = `card-header-icon ${maybe(className).orElse("")}`;
    return <div className={classes} {...rest}>{children}</div>;
};

Card.Image = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {children, className, ...rest} = props;
    const classes = `card-image ${maybe(className).orElse("")}`;
    return <div className={classes} {...rest}>{children}</div>;
};

Card.Content = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {children, className, ...rest} = props;
    const classes = `card-content ${maybe(className).orElse("")}`;
    return <div className={classes} {...rest}>{children}</div>;
};

Card.Footer = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {children, className, ...rest} = props;
    const classes = `card-footer ${maybe(className).orElse("")}`;
    return <div className={classes} {...rest}>{children}</div>;
};

Card.FooterItem = (props: ButtonProps & React.AllHTMLAttributes<HTMLButtonElement & HTMLAnchorElement>) => {
    const {children, className, ...rest} = props;
    const classes = `card-footer-item ${maybe(className).orElse("")}`;
    return <Button className={classes} {...rest}>{children}</Button>;
};

export default Card;
