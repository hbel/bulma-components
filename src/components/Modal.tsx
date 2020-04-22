import React, { useState } from "react";
import {animated, useSpring} from "react-spring";
import { Button } from "./Button";

interface Props {
    show: boolean;
    title: string;
    cancel?: string;
    onCancel?: () => void;
    okay?: string;
    onOkay?: () => void;
}

const Modal = (props: Props & React.HTMLAttributes<any>) => {
    const {show, cancel, onCancel, title, children, okay, onOkay} = props;
    const [close, setClose] = useState(false);
    const [okaysen, setOkay] = useState(false);
    const fadeIn = useSpring({
        reverse: close,
        reset: close,
        onRest: close ? () => { setClose(false); okaysen ? onOkay!() : onCancel!(); } : undefined,
        opacity: 1, from: { opacity: 0 },
    });
    const closer = (ok: boolean) => () => { setClose(true); setOkay(ok); };

    return <animated.div className={`modal ${show ? "is-active" : ""}`} style={fadeIn}>
        <div className="modal-background" onClick={onCancel}/>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">{title}</p>
                {cancel && <button className="delete" aria-label="close" onClick={onCancel} />}
            </header>
            <section className="modal-card-body">
                {children}
            </section>
            <footer className="modal-card-foot">
                {okay && <Button type="success" onClick={closer(false)}>{okay}</Button>}
                {cancel && <Button onClick={closer(true)}>{cancel}</Button>}
            </footer>
        </div>
    </animated.div>;
};

export default Modal;
