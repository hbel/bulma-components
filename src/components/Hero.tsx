import React from "react";
import { maybe } from "tsmonads";

import { classNames, is, to } from "./utils";

interface HeroProps {
    type?: "primary" | "info" | "success" | "warning" | "danger" | "light" | "dark";
    size?: "medium" | "large" | "fullheight";
    navbar?: boolean;
    bold?: boolean;
    id?: string;
}

const Hero = (props: HeroProps & React.HTMLAttributes<any>) => {
    const {children, type, size, navbar, bold, className, id} = props;
    const classes = classNames(
        "hero",
        is(type),
        is(size),
        to("is-fullheight-with-navbar", navbar),
        to("is-bold", bold),
        maybe(className),
    );
    return <section className={classes} id={id}>
        {children}
    </section>;
};

Hero.Head = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {className, children} = props;
    return <div className={"hero-head " + maybe(className).orElse("")}>{children}</div>;
};

Hero.Body = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {className, children, style} = props;
    return <div className={"hero-body " + maybe(className).orElse("")} style={style}>{children}</div>;
};

Hero.Foot = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {className, children} = props;
    return <div className={"hero-foot " + maybe(className).orElse("")}>{children}</div>;
};

export default Hero;
