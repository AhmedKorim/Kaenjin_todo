import React from 'react';
import {CSSTransition} from "react-transition-group";
import {BacgroundRipple, DumbWrapper} from "../utilites";
import './RippleKeyFrames.scss';

const transtionConfing = {
    enter: 'rippleIn',
    enterActive: 'rippleIn',
    enterDone: 'rippleIn',
    exit: 'rippleOut',
    exitActive: 'rippleOut',
    exitDone: 'rippleOut'
}
const RippleEffect = ({top, left, visible, width, height,$color, ...other}) => {
    console.log(top, left);
    return (
        <DumbWrapper width="100%" height="100%" zIndex={visible ? '1200' : 1}>
            <CSSTransition
                in={visible}
                unmountOnExit
                mountOnEnter
                classNames={transtionConfing} timeout={1000}>
                <BacgroundRipple top={top} left={left} {...other} background={$color} />
            </CSSTransition>
        </DumbWrapper>
    );
};
export default RippleEffect;

