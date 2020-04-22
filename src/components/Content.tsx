import React from "react";
import Heading from "./Heading";

interface Props {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    level?: number;
    isFlex?: boolean;
}

const Content = (props: Props & React.HTMLAttributes<HTMLDivElement>) => {
    const {title, subtitle, level = 1, isFlex, children, className, ...rest} = props;
    return <div className={className} {...rest}>
        {title && <Heading level={level}>{title}</Heading>}
        {subtitle && <Heading level={level + 2}>{title}</Heading>}
        <div className="content" style={isFlex ? {display: "flex"} : {}}>{children}</div>
    </div>;
};

export default Content;
